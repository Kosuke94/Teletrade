import React from "react";
import CurrencyPair from "../components/currency-pair-component/CurrencyPair";
import TableLayout from "../components/currency-pair-component/CurrencyPairTableContainer";
const HomePage = (props) => {
  return (
    <div className="homePage page">
      <TableLayout>
        <CurrencyPair symbol="tBTCUSD" />
        <CurrencyPair symbol="tBTCEUR" />
        <CurrencyPair symbol="tETHUSD" />
        <CurrencyPair symbol="tETHEUR" />
        <CurrencyPair symbol="tEOSUSD" />
      </TableLayout>
    </div>
  );
};

export default HomePage;
