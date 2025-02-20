/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "../components/CommonComponents";
import NewsCard from "../components/common/NewsCard";
import Pagination from "../components/common/Pagination";
import DataService from "../services/DataService";
import Spinner from "../components/common/Spinner";

function NewsList() {
  const [isLoading, setIsLoading] = useState(false);

  const dataService = new DataService();

  const [newsList, setNewsList] = useState([]);
  // const [newsLoaded, setNewsLoaded] = useState(false)
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await dataService.getGlobalNews();
      if (status) {
        setNewsList(data.sort((a, b) => b.id - a.id));
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    // fetchNews();

    // const fetchNews = async () => {//this is temporary for demostrate
    //   await fetch(" http://localhost:3005/news").then(res => res.json()).then(data => {
    //     console.log(data)
    //     setNewsList(data)
    //     // setNewsLoaded(true)
    //   }).catch(e=>console.log(e));
    // };
    fetchNews();
  }, []);
  console.log("error", error);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        newsList.length >= 1 && (
          <Container fluid>
            <Pagination
              data={newsList}
              RenderComponent={NewsCard}
              title="Posts"
              pageLimit={1}
              dataLimit={4}
            />
          </Container>
        )
      )}
    </>
  );
}

export default NewsList;
