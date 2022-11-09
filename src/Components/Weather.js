import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { setLoadingFalse, setLoadingTrue } from "../redux/slices/loadingSlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay);
    const dispatch = useDispatch();

    const latitude = display.capitalInfo.latlng[0];
    const longitude = display.capitalInfo.latlng[1];

    useEffect(() => {
      dispatch(setLoadingTrue())
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: `${latitude}, ${longitude}` },
        headers: {
          "X-RapidAPI-Key":
            "9a55e46837msh0ad7425a5afe99fp19270cjsne28cc17745e5",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
            setWeather(response.data);
            dispatch(setLoadingFalse());
          
        })
        .catch(function (error) {
          console.error(error);
          dispatch(setLoadingFalse());
          alert('Cannot fetch weather data')
        });
    }, []);

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tbody>
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>

                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Weather;
