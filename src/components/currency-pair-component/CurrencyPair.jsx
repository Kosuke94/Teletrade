import React, { useState, useEffect } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CurrencyPair = (props) => {
  const [response, setResponse] = useState("");

  const symbol = props.symbol;
  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol,
    });
    ws.onopen = () => {
      ws.send(msg);
    };
    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);

      if (message[1] && message[1].length === 10) {
        const transformedMessage = {
          symbol: symbol.slice(1),
          dailyChange: `${message[1][4]}%`,
          lastPrice: message[1][6],
          volume: message[1][7],
        };
        setResponse(transformedMessage);
      }
    };
    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <TableRow>
      <TableCell>{response.symbol}</TableCell>
      <TableCell>{response.dailyChange}</TableCell>
      <TableCell>{response.volume}</TableCell>
      <TableCell>{response.lastPrice}</TableCell>
    </TableRow>
  );
};

export default CurrencyPair;
