import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HistoryChart from "./HistoryChart";
import CoinData from "./CoinData";
import coinGecko from "../../apis/coinGecko";

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const formatData = data => {
        return data.map(el => {
            return {
                t:el[0],
                y: el[1].toFixed(2),
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const [day, week, twoWeek, month, threeMonth, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "7",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "14",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "30",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "90",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "365",
                    },
                }),
                coinGecko.get("/coins/markets/", {
                    params: {
                        vs_currency: "usd",
                        ids: id
                    },
                }),
            ]);

            setCoinData({
                day: formatData(day.data.prices),
                week:formatData(week.data.prices),
                twoWeek: formatData(twoWeek.data.prices),
                month: formatData(month.data.prices),
                threeMonth: formatData(threeMonth.data.prices),
                year: formatData(year.data.prices),
                detail: detail.data[0]
            });
            setIsLoading(false)
        };

        fetchData();
    },[]);

    const renderData = () => {
        if(isLoading){
            return <div>Loading...</div>
        }
        return (
            <div className="coinlist">
                Name: {id}
                <HistoryChart data={coinData}/>
                <CoinData data={coinData.detail}/>
                
            </div>
        );
    }

    return renderData();
};

export default CoinDetailPage;