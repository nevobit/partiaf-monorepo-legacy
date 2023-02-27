import { PARTIAF_API } from "@/api";
import { getOneCoverById } from "@/redux/states/covers/thunks";
import { getGoerSlice } from "@/redux/states/goers/goers";
import { getGoersByIdThunks } from "@/redux/states/goers/thunks";
import { AppStore } from "@/redux/store";
import { User } from "@partiaf/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";

const CoversDetails = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  const { cover, success, loading } = useSelector(
    (state: AppStore) => state.covers
  );

  const {
    goers = [],
    success: succesGoer,
    loading: LoadingGoer,
  } = useSelector((state: AppStore) => state.goers);

  // getting all users
  const [allUsers, setAllUsers] = useState<any>();
  const getDataAllUsers = async () => {
    const { data } = await PARTIAF_API.get("/users");
    setAllUsers(data);
  };

  // const UsersInLine = allUsers?.filter((user: User) =>
  //   goers.some((goer) => goer.cover === uuid && goer.status === "in line")
  // );
  
  const UsersInLine =  allUsers?.filter((user: User) => goers?.some((goer) => goer.user == user.uuid && goer.cover === uuid && goer.status === "in line" )
  );
  
  const usersList = () => {
    let newUser = {}
    const usersFiltered:any = [];
    
    const users = allUsers?.map((user:any) => {
        goers.filter((goer:any) => {
          if(goer.user === user.uuid && goer.cover === uuid && goer.status === "in line"){
            newUser = {
              gender: user.phone,
              name: goer.name,
              username: user.username
            }
            usersFiltered.push(newUser)              
          }
        } )
    })
    return usersFiltered;
    
  }
  const UsersJoined = allUsers?.filter((user: User) =>
    goers.some((goer) => goer.user === user.uuid && goer.status === "joined")
  );

  const UsersCancelled = allUsers?.filter((user: User) =>
    goers.some((goer) => goer.user === user.uuid && goer.status === "cancelled")
  );

  useEffect(() => {
    getDataAllUsers();
    dispatch(getOneCoverById(uuid || "") as any);
    dispatch(getGoersByIdThunks(uuid) as any);
    usersList();
  }, [dispatch, success]);
  
  
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>{cover.limit}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas Efectivas</h3>
              <p>{goers.filter((goer) => goer.status == "in line").length}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas no Efectivas </h3>
              <p>{goers.filter((goer) => goer.status == "cancelled").length}</p>
            </div>
          </div>
          <div className={styles.screen_title}>
            <h3>Detalle Cover</h3>
          </div>

          <div className={styles.list_container}>
            <div className={styles.list}>
              <h3>En cola</h3>
              {usersList()?.map((user: any) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{user.username}</h3>
                        <p>{user.gender}</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{cover.name}</h4>
                      <p>{cover.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Ingresado</h3>
              {UsersJoined?.map((user: User) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{user.username}</h3>
                        <p>Femenino</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{cover.name}</h4>
                      <p>{cover.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Cancelado</h3>
              {UsersCancelled?.map((user: User) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{user.username}</h3>
                        <p>Masculino</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{cover.name}</h4>
                      <p>{cover.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoversDetails;
