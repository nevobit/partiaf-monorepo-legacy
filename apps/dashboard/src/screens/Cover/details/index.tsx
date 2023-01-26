import { AppStore } from '@/redux/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Details.module.css';

const CoversDetails = () => {
  const dispatch = useDispatch();
  const {
    covers = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.covers);
  const { store, stores } = useSelector((state: AppStore) => state.stores);

  useEffect(() => {
    // dispatch(getCoverById(store.uuid || "") as any);
  }, [dispatch, store, success]);
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>{covers.length}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas Efectivas</h3>
              <p>0</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas no Efectivas </h3>
              <p>0</p>
            </div>
          </div>
          <div className={styles.screen_title}>
            <h3>Detalle Cover</h3>
          </div>

          <div className={styles.list_container}>
            <div className={styles.list}>
            <h3>En cola</h3>
      <div className={styles.queue_cards}>
          <div className={`${styles.card_queue} cola}`}>
            <div className={styles.image_section}>
              <img src={"/default.jpg"} alt="" />
              <div>
                <h3>Pedro Picasso</h3>
                <p>Masculino</p>
              </div>
            </div>

            <div className={styles.event_section}>
              <h4>Party Partiaf</h4>
              <p>General</p>
            </div>
          </div>
      </div>
            </div>
            <div className={styles.list}>
            <h3>Ingresado</h3>
      <div className={styles.queue_cards}>
          <div className={`${styles.card_queue} cola}`}>
            <div className={styles.image_section}>
              <img src={"/default.jpg"} alt="" />
              <div>
                <h3>Pedro Picasso</h3>
                <p>Masculino</p>
              </div>
            </div>

            <div className={styles.event_section}>
              <h4>Party Partiaf</h4>
              <p>General</p>
            </div>
          </div>
      </div>
            </div>
            <div className={styles.list}>
            <h3>Cancelado</h3>
      <div className={styles.queue_cards}>
          <div className={`${styles.card_queue} cola}`}>
            <div className={styles.image_section}>
              <img src={"/default.jpg"} alt="" />
              <div>
                <h3>Pedro Picasso</h3>
                <p>Masculino</p>
              </div>
            </div>

            <div className={styles.event_section}>
              <h4>Party Partiaf</h4>
              <p>General</p>
            </div>
          </div>
      </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};


export default CoversDetails
