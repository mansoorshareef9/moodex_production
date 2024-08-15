import useSWR from "swr";
import Image from "next/image";
import {
  POLYGON_TOKENS_BY_SYMBOL,
  POLYGON_TOKENS_BY_ADDRESS,
} from "../../lib/constants";
import { fetcher } from "../Price";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import type { PriceResponse, QuoteResponse } from "../api/types";
import { formatUnits } from "ethers";
import {
  useAccount,
  useSendTransaction,
  usePrepareSendTransaction,
  useWaitForTransaction,
  type Address,
} from "wagmi";
import styles from '../Price/Form.module.css';
import React from 'react';
import { Hash } from "crypto";


// Affiliate fee
const AFFILIATE_FEE = 0.003  ; // Percentage of the buyAmount that should be attributed to feeRecipient as affiliate fees
const FEE_RECIPIENT = "0xD86766b68e844E9096662d0E38Bc6d11e803B7Bb"; // The ETH address that should receive affiliate fees

// QuoteView function
export default function QuoteView({
  price,
  quote,
  setQuote,
  takerAddress,
}: {
  price: PriceResponse;
  quote: QuoteResponse | undefined;
  setQuote: (price: any) => void;
  takerAddress: Address | undefined;
}) {
  const sellTokenInfo = POLYGON_TOKENS_BY_ADDRESS[price.sellTokenAddress.toLowerCase()];
  const buyTokenInfo = POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()];
  const isNativeToken = sellTokenInfo.symbol.toLowerCase() === "matic"; // Check if the sell token is MATIC

  // Fetch quote here
  const { address } = useAccount();
  const router = useRouter();

  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/quote",
      {
        sellToken: price.sellTokenAddress,
        buyToken: price.buyTokenAddress,
        sellAmount: price.sellAmount,
        takerAddress,
        feeRecipient: FEE_RECIPIENT,
        buyTokenPercentageFee: AFFILIATE_FEE,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        setQuote(data);
        console.log("quote", data);
        console.log(formatUnits(data.buyAmount, buyTokenInfo.decimals), data);
      },
    },
  );

  // Prepare transaction configuration
  const config = isNativeToken
    ? {
        to: quote?.to,  // 0x Exchange Proxy contract address
        value: quote?.sellAmount ? BigInt(quote.sellAmount) : undefined, // Set the MATIC value
        data: quote?.data, // This should contain the correct encoded function call for the swap
      }
    : {
        to: quote?.to,
        value: undefined,
        data: quote?.data, // ERC-20 transactions rely on the data field
      };

      const { sendTransaction, data: transactionData, isError: transactionError } = useSendTransaction(config);
      const [transactionStatus, setTransactionStatus] = useState<'idle' | 'pending' | 'success' | 'error' | 'rejected'>('idle');
      const [popupVisible, setPopupVisible] = useState(false);
      const [transactionHash, setTransactionHash] = useState<string | undefined>(undefined);
      
      const handlePlaceOrder = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      
        console.log("Attempting to send transaction...");
      
        if (!sendTransaction) {
          console.error("Transaction not prepared");
          return;
        }
        setTransactionStatus('pending');
        setPopupVisible(true);
      
        try {
          await sendTransaction(); // Await to properly catch errors
        } catch (error: any) {
          console.error("Transaction error:", error);
      
          if (error.name === 'TransactionExecutionError' || error.message.includes('rejected')) {  // MetaMask user rejection error
            setTransactionStatus('rejected');
          } else {
            setTransactionStatus('error');
          }
      
          setTransactionHash(undefined); // Clear transaction hash on rejection or error
        }
      };
      
       
      useEffect(() => {
        if (transactionData) {
          setTransactionHash(transactionData.hash);
        }
      
        if (transactionError) {
          setTransactionStatus('error');
        }
      }, [transactionData, transactionError]);
      
      const { status, error } = useWaitForTransaction({
        hash: transactionData?.hash,
      });
      
      useEffect(() => {
        if (status === 'success') {
          setTransactionStatus('success');
        } else if (status === 'error') {
          setTransactionStatus('error');
        } else if (error) {
          setTransactionStatus('error');
        }
      }, [status, error]);
      
      const handleClose = () => {
        setPopupVisible(false);
        setTransactionStatus('idle');
        setTransactionHash(undefined);
        router.reload();
      };
      

  if (!quote) {
    return <div style={{ color: 'white', fontWeight: 'bold' }}>Getting Final quote...</div>;
  }

  return (
    <div className="p-3 mx-auto max-w-screen-sm ">
      <button
        className="bg-dark-200 text-white text-xl font-bold py-2 px-4 rounded mt-4"
        onClick={() => {
          router.reload();
        }}
      >
        Go Back
      </button>
      <form className={styles.form}>
        <div>
          <div className="text-xl mb-2 text-white">You pay</div>
          <div className="flex items-center text-lg sm:text-3xl mb-4 text-white">
            <img
              alt={sellTokenInfo.symbol}
              className="h-9 w-9 mr-2 rounded-md"
              src={sellTokenInfo.logoURI}
            />
            <span>{quote.sellAmount && sellTokenInfo.decimals !== undefined ? formatUnits(BigInt(quote.sellAmount), sellTokenInfo.decimals) : 'Invalid Amount'}</span>
            <div className="ml-2">{sellTokenInfo.symbol}</div>
          </div>
        </div>

        <div>
          <div className="text-xl mb-2 text-white">You receive</div>
          <div className="flex items-center text-lg sm:text-3xl mb-4 text-white">
            <img
              alt={buyTokenInfo.symbol}
              className="h-9 w-9 mr-2 rounded-md"
              src={buyTokenInfo.logoURI}
            />
            <span>{quote.buyAmount && buyTokenInfo.decimals !== undefined ? Number(formatUnits(BigInt(quote.buyAmount), buyTokenInfo.decimals)).toFixed(2) : 'Invalid Amount'}</span>
            <div className="ml-2">{buyTokenInfo.symbol}</div>
          </div>
        </div>
        <div>
          <div className="text-white mb-3 ">
            {quote && quote.grossBuyAmount
              ? "Fee: " +
                (quote.grossBuyAmount && buyTokenInfo.decimals !== undefined ? (Number(formatUnits(BigInt(quote.grossBuyAmount), buyTokenInfo.decimals))*AFFILIATE_FEE).toFixed(1) : 'Invalid Amount') +
                " " +
                buyTokenInfo.symbol
              : null}
          </div>
        </div>
        <button
          className={styles.button}
          onClick={handlePlaceOrder}
        >
          Swap
        </button>
      </form>

      {popupVisible && (
  <div className="popup">
    <p className="status">
      {transactionStatus === 'pending' && 'Transaction is pending...'}
      {transactionStatus === 'success' && 'Transaction successful!'}
      {transactionStatus === 'error' && 'Transaction failed. Please try again.'}
      {transactionStatus === 'rejected' && 'Transaction was rejected by the user.'}
    </p>
    {(transactionStatus === 'pending' || transactionStatus === 'success') && transactionHash && (
      <a href={`https://polygonscan.com/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer" className="external-link">
        Transaction Hash
      </a>
    )}
    <button className="close-button" onClick={handleClose}>Close</button>
  </div>
)}


<style jsx>{`
  .popup {
    position: fixed;
    top: 10%; /* Positioning towards the top center */
    left: 89%;
    transform: translate(-50%, -10%); /* Centering horizontally */
    width: 20%; /* Adjust width as needed */
    height: 20%; /* Adjust height as needed */
    background: rgba(0, 0, 0, 0.7); /* Grey color with slight transparency */
    padding: 20px;
    border: 1px solid black;
    z-index: 1000;
    border-radius: 15px; /* Rounded corners for smooth look */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    justify-content: space-between; /* Space out the content */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text within the content */
    backdrop-filter: blur(5px); /* Glossy effect */
    color: white; /* Make text white */
  }

  .status {
    margin-bottom: 10px; /* Add some space below the status message */
    font-size: 1.2em; /* Increase font size for better visibility */
  }

  .external-link {
    color: #f01717; /* Blue color for the link */
    text-decoration: underline; /* Underline the link */
    margin-bottom: auto; /* Push the link closer to the top */
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  .close-button {
    margin-top: auto; /* Push the button to the bottom */
    padding: 5px 10px;
    background-color: #333; /* Dark background for the button */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .close-button:hover {
    background-color: #555; /* Slightly lighter background on hover */
  }
`}</style>

    </div>
  );
}
