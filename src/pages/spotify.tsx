import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { GlobalSpotifyStyle } from '../styles/pages/spotify'

const Spotify: React.FC = () => {
  return (
    <>
      <GlobalSpotifyStyle />
      <Head>
        <title>Spotify Ace</title>
        <link
          rel="shortcut icon"
          href="images/spotify.png"
          type="image/x-icon"
        />
      </Head>
      <Header></Header>

      <main>
        <div className="container">
          <div className="row justify-content-center m-4">
            <div className="col-12">
              <div className="border">
                <div className="card-body row align-items-center">
                  <div className="col-md-12 d-flex">
                    <input
                      className="form-control form-control-lg form-control-borderless"
                      id="searchBar"
                      type="search"
                    />
                    <label className="btn btn-success m-1" id="searchBtn">
                      <i className="fa fa-search"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="container content-parent d-flex justify-content-center align-items-center">
            <div className="spinner-border m-0" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}

export default Spotify