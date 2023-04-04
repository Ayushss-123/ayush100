import * as React from "react";
import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { navigate } from "gatsby";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import * as styles from "./index.module.css";

const Homepage: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, []);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, []);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, []);

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, []);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, []);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <img
                className={styles.fickleflightIcon}
                alt=""
                src="/fickleflight.svg"
              />
              <div className={styles.navigationRight}>
                <div className={styles.navigationMenu}>
                  <button className={styles.explore}>Explore</button>
                  <div className={styles.search} onClick={onSearchTextClick}>
                    Search
                  </div>
                  <div className={styles.search} onClick={onHotelsTextClick}>
                    Hotels
                  </div>
                  <button className={styles.offers}>Offers</button>
                </div>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="/notification.svg"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/notification1.svg"
                  />
                  <img
                    className={styles.profilePictureIcon}
                    alt=""
                    src="/top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <div
                className={styles.letsExplore}
              >{`Let’s explore & travel the world`}</div>
              <div className={styles.findTheBest}>
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.formTitleGroup}>
                <b className={styles.searchFlights}>Search flights</b>
                <div className={styles.flightOptions}>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <img
                        className={styles.radiobuttonuncheckedIcon}
                        alt=""
                        src="/radiobuttonunchecked.svg"
                      />
                    </div>
                    <div className={styles.label}>Return</div>
                  </div>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <img
                        className={styles.radiobuttonuncheckedIcon}
                        alt=""
                        src="/radiobuttonchecked.svg"
                      />
                    </div>
                    <div className={styles.label1}>One-way</div>
                  </div>
                </div>
              </div>
              <div className={styles.formInputsRow}>
                <div className={styles.inputsRow}>
                  <Autocomplete
                    className={styles.selectoutlined}
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                  <div className={styles.selectoutlined1}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.arrival}>Arrival</div>
                      </div>
                      <div className={styles.active}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.losAngelesLa}>
                          Los Angeles (LA)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.selectoutlined1}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.arrival}>Date</div>
                      </div>
                      <div className={styles.active}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel1.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.losAngelesLa}>01/05/2022</div>
                        <img
                          className={styles.dateIcon}
                          alt=""
                          src="/date.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchFlightsButton}
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <b className={styles.recentSearches}>Recent Searches</b>
            <div className={styles.flightDetails}>
              <div className={styles.recentSearches1}>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetails}>
                      <b className={styles.sin}>SIN</b>
                    </div>
                    <img
                      className={styles.durationIcon}
                      alt=""
                      src="/duration.svg"
                    />
                    <div className={styles.toDetails}>
                      <b className={styles.lax}>LAX</b>
                    </div>
                  </div>
                  <div className={styles.departOn7Container}>
                    <b>{`Depart on: `}</b>
                    <span>7 Sep 2021</span>
                  </div>
                </div>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetails}>
                      <b className={styles.sin}>MY</b>
                    </div>
                    <img
                      className={styles.durationIcon}
                      alt=""
                      src="/duration1.svg"
                    />
                    <div className={styles.toDetails}>
                      <b className={styles.lax}>DUB</b>
                    </div>
                  </div>
                  <div className={styles.departOn7Container}>
                    <b>Depart on:</b>
                    <span> 9 Sep 2021</span>
                  </div>
                </div>
              </div>
              <div className={styles.prepareMenu}>
                <div className={styles.recentSearches}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenus}>
                  <button className={styles.hotel} onClick={onHotelClick}>
                    <img
                      className={styles.hotelIcon}
                      alt=""
                      src="/hotel-icon.svg"
                    />
                    <div className={styles.hotel1}>Hotel</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.background} />
                      <img
                        className={styles.ticketIcon}
                        alt=""
                        src="/ticket.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Attractions</div>
                  </button>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelIcon}
                      alt=""
                      src="/eats-icon.svg"
                    />
                    <div className={styles.attractions1}>Eats</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.background1} />
                      <img
                        className={styles.trainIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Commute</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.taxiIcon}>
                      <div className={styles.background2} />
                      <img
                        className={styles.taxiIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                    <div className={styles.taxi1}>Taxi</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.background3} />
                      <img
                        className={styles.movieIcon}
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Movies</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popDestinationsMain}>
            <div className={styles.destinationsTitles}>
              <div className={styles.titleContainer}>
                <b className={styles.recentSearches}>Plan your next trip</b>
                <b className={styles.mostPopularDestinations}>
                  Most Popular Destinations
                </b>
              </div>
              <button className={styles.viewAllTop}>
                <div className={styles.viewAllDestinations}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
            <div className={styles.cardsContainer}>
              <button className={styles.col1}>
                <div className={styles.pariscard}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage@2x.png"
                  />
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Paris</b>
                    <div className={styles.details}>
                      <div className={styles.from}>from</div>
                      <div className={styles.price}>$699</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.col1}>
                <div className={styles.pariscard}>
                  <img
                    className={styles.cardimageIcon1}
                    alt=""
                    src="/cardimage1@2x.png"
                  />
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Greece</b>
                    <div className={styles.details}>
                      <div className={styles.from}>from</div>
                      <div className={styles.price}>$1079</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.col1}>
                <div className={styles.pariscard}>
                  <img
                    className={styles.cardimageIcon1}
                    alt=""
                    src="/cardimage2@2x.png"
                  />
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Norway</b>
                    <div className={styles.details}>
                      <div className={styles.from}>from</div>
                      <div className={styles.price}>$895</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.col1}>
                <div className={styles.pariscard}>
                  <img
                    className={styles.cardimageIcon1}
                    alt=""
                    src="/cardimage3@2x.png"
                  />
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Tuscany</b>
                    <div className={styles.details}>
                      <div className={styles.from}>from</div>
                      <div className={styles.price}>$1245</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.viewAllBottom}>
              <div className={styles.viewAllDestinations1}>
                View all destinations
              </div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright1.svg"
              />
            </div>
          </div>
          <div className={styles.recommendedHolidaysContainer}>
            <div className={styles.recTitle}>
              <b className={styles.recommendedHolidays}>Recommended Holidays</b>
              <button className={styles.viewAllHolidaysParent}>
                <div className={styles.viewAllHolidays}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright2.svg"
                />
              </button>
            </div>
            <div className={styles.recCardsContainer}>
              <button className={styles.recCard1}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/unsplash5mv818tzxeo@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Bali</div>
                      <div className={styles.d3n}>4D3N</div>
                    </div>
                    <div className={styles.div1}>$899</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard1}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/switzerlandimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Swiss</div>
                      <div className={styles.d3n}>6D5N</div>
                    </div>
                    <div className={styles.div1}>$900</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard3}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/boracayimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Boracay</div>
                      <div className={styles.d3n}>5D4N</div>
                    </div>
                    <div className={styles.div1}>$699</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard4}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/palawanimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Palawan</div>
                      <div className={styles.d3n}>4D3N</div>
                    </div>
                    <div className={styles.div1}>$789</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.viewAllBottom1}>
              <div className={styles.viewAllHolidays1}>View all holidays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright3.svg"
              />
            </div>
          </div>
          <div className={styles.popularStays}>
            <div className={styles.popularStaysHeader}>
              <div className={styles.popularStaysTitle}>
                <b className={styles.popularStays1}>Popular Stays</b>
              </div>
              <button
                className={styles.viewAllStaysButton}
                onClick={onViewAllStaysButtonClick}
              >
                <div className={styles.viewAllStays}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright4.svg"
                />
              </button>
            </div>
            <div className={styles.hotelCards}>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashrlwe8f8anoc@2x.png"
                  />
                  <div className={styles.stayDetails}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Entire bungalow
                      </div>
                      <b className={styles.matterhornSuites}>
                        Matterhorn Suites
                      </b>
                      <div className={styles.night}>$575/night</div>
                    </div>
                    <button
                      className={styles.video}
                      onClick={openMatterhornPopup}
                    >
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(60 reviews)</div>
                    <div className={styles.parent1}>
                      <div className={styles.div5}>4.9</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashtsn8bpopveo@2x.png"
                  />
                  <div className={styles.stayDetails1}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        2-Story beachfront suite
                      </div>
                      <b className={styles.matterhornSuites}>
                        Discovery Shores
                      </b>
                      <div className={styles.night}>$360/night</div>
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(116 reviews)</div>
                    <div className={styles.parent1}>
                      <div className={styles.div5}>4.8</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard4}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashrlwe8f8anoc1@2x.png"
                  />
                  <div className={styles.stayDetails1}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Single deluxe hut
                      </div>
                      <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                      <div className={styles.night}>$420/night</div>
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews2}>(78 reviews)</div>
                    <div className={styles.parent3}>
                      <div className={styles.div7}>4.7</div>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector5.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard41}>
                <div className={styles.hotelCard5}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashyqrybvxug5q@2x.png"
                  />
                  <div className={styles.stayDetails}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Deluxe King Room
                      </div>
                      <b className={styles.arcticHut}>Lake Louise Inn</b>
                      <div className={styles.night}>$244/night</div>
                    </div>
                    <button
                      className={styles.video}
                      onClick={openMatterhornPopup1}
                    >
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group1.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(63 reviews)</div>
                    <div className={styles.parent1}>
                      <div className={styles.div5}>4.6</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector6.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.mobileViewAllStays}>
              <div className={styles.viewAllStays1}>View all stays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.subscribeSection}>
            <img
              className={styles.subscribeSectionBackground}
              alt=""
              src="/subscribe-section-background@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.recentSearches}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <div className={styles.input2}>
                      <div className={styles.inactive}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourName}>Your name</div>
                        <div className={styles.muiAutocompleteIndicator}>
                          <div className={styles.iconbutton}>
                            <div className={styles.unstylediconbutton}>
                              <img
                                className={styles.radiobuttonuncheckedIcon}
                                alt=""
                                src="/close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrow}>
                          <img className={styles.notificationBellIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formText}>
                    <div className={styles.input2}>
                      <div className={styles.inactive}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourName}>Email address</div>
                        <div className={styles.muiAutocompleteIndicator}>
                          <div className={styles.iconbutton}>
                            <div className={styles.unstylediconbutton}>
                              <img
                                className={styles.radiobuttonuncheckedIcon}
                                alt=""
                                src="/close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrow}>
                          <img className={styles.notificationBellIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button5}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button6}>submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleflightBio}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons.svg"
              />
            </div>
            <div className={styles.footerChild} />
            <div className={styles.footerLinks}>
              <div className={styles.company}>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.company1}>Company</div>
                <div className={styles.news}>News</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.company}>
                <div className={styles.account}>Account</div>
                <div className={styles.support1}>Support</div>
                <div className={styles.supportCenter}>Support Center</div>
                <div className={styles.faq}>FAQ</div>
                <div className={styles.accessibility}>Accessibility</div>
              </div>
              <div className={styles.more}>
                <div className={styles.covidAdvisory}>Covid Advisory</div>
                <div className={styles.more1}>More</div>
                <div className={styles.airlineFees}>Airline Fees</div>
                <div className={styles.tips}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
