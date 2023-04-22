import { useEffect, useState } from "react";
import React from "react";
import {
  getPollValueFirstSource,
  getPollValueSecondSource,
  getPollValueThirdSource,
} from "../../axios/rates";

import "./index.css";
import { getInitData, longPollRequest } from "../../helpers/api/rates";
import {
  TABLE_COLUMNS_NAMES,
  TABLE_ROWS_NAMES,
} from "../../helpers/constants/ratesTable.constants";
import clsx from "clsx";
import { getMinRate } from "../../helpers/getMinRate";

const Table = () => {
  const [sourceValues, setSourceValues] = useState([]);
  const [updateFromFirstSource, setUpdateFromFirstSorce] = useState(null);
  const [updateFromSecondSource, setUpdateFromSecondSorce] = useState(null);
  const [updateFromThirdSource, setUpdateFromThirdSorce] = useState(null);

  const setInitData = async () => {
    const initData = await getInitData();
    setSourceValues(initData);
  };

  const updateValuesState = (update, sourceNumber) => {
    const updatedValues = [...sourceValues];
    updatedValues[sourceNumber] = update;
    setSourceValues(updatedValues);
  };

  useEffect(() => {
    setInitData();
    longPollRequest(getPollValueFirstSource, setUpdateFromFirstSorce);
    longPollRequest(getPollValueSecondSource, setUpdateFromSecondSorce);
    longPollRequest(getPollValueThirdSource, setUpdateFromThirdSorce);
  }, []);

  useEffect(() => {
    if (updateFromFirstSource) {
      updateValuesState(updateFromFirstSource, 0);
    }
  }, [updateFromFirstSource]);
  useEffect(() => {
    if (updateFromSecondSource) {
      updateValuesState(updateFromSecondSource, 1);
    }
  }, [updateFromSecondSource]);
  useEffect(() => {
    if (updateFromThirdSource) {
      updateValuesState(updateFromThirdSource, 2);
    }
  }, [updateFromThirdSource]);

  return (
    <div>
      <div className="table">
        <div className="top_line">
          <div className="header">Pair name/market</div>
          {TABLE_ROWS_NAMES.map((row) => {
            return <div className="header">{row}</div>;
          })}
        </div>
        {sourceValues.map((source, index) => {
          return (
            <div className="top_line _Second">
              <div className="header">{TABLE_COLUMNS_NAMES[index]}</div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "RUB") === index &&
                    "minRate"
                )}
              >
                {source.ready ? Math.abs(source.RUB).toFixed(3) : "-"}
              </div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "USD") === index &&
                    "minRate"
                )}
              >
                {source.ready ? Math.abs(source.USD).toFixed(3) : "-"}
              </div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "EUR") === index &&
                    "minRate"
                )}
              >
                {source.ready ? Math.abs(source.EUR).toFixed(3) : "-"}
              </div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "RUB/USD") === index &&
                    "minRate"
                )}
              >
                {source.ready
                  ? (Math.abs(source.RUB) / Math.abs(source.USD)).toFixed(3)
                  : "-"}
              </div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "RUB/EUR") === index &&
                    "minRate"
                )}
              >
                {source.ready
                  ? (Math.abs(source.RUB) / Math.abs(source.EUR)).toFixed(3)
                  : "-"}
              </div>
              <div
                className={clsx(
                  "header",
                  source.ready &&
                    getMinRate(sourceValues, "EUR/USD") === index &&
                    source.ready &&
                    "minRate"
                )}
              >
                {source.ready
                  ? (Math.abs(source.EUR) / Math.abs(source.USD)).toFixed(3)
                  : "-"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
