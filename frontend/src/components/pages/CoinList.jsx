import React, {useEffect, useState} from "react";
import coinGecko from "../../apis/coinGecko";
import Coin from "../../IndividualCoin";

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin, ethereum, cardano"
                },
            });
            setCoins(response.data)
            setIsLoading(false)
        };

        fetchData();
    },[]);

    const renderCoins = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
        return (
            <ul className={"coinlist list-group mt-2"}>
                {
                    coins.map(coin => {
                        return <Coin key={coin.id} coin={coin}/>;
                    })}
            </ul>
        );
    };

    return <div>{renderCoins()}</div>;
};

export default CoinList;