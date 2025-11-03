import React from "react";
import styles from "@/components/Ecomwidget.module.css";
import EcomWidgetCard from "./EcomWidgetCard";
import Image from "next/image";
import Link from "next/link";
const EcomWidgetProductGrid = () => {
  return (
    <div>
      <div
        className={`${styles.EcomWidgetGridWrapper} ${styles.EcomWidgetProductGridWrapper}`}
      >
        <EcomWidgetCard imgSrc="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-09-23T07%253A36%253A16.730Z-Ananya.jpg&w=3840&q=75" />
        <div className={styles.EcomPrdGrid}>
          <div className={styles.EcomPrdGridImgCntr}>
            <img
              width={1000}
              height={1000}
              src="https://static.zara.net/assets/public/9b9c/5aaf/204042e2b4d2/0ba273dfd0b6/04772239800-e1/04772239800-e1.jpg?ts=1759482412033&w=723"
              alt=""
            />
            <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <img
              width={1000}
              height={1000}
              src="https://static.zara.net/assets/public/9429/8494/19154ed88872/062badd56a31/05919209800-e1/05919209800-e1.jpg?ts=1760457107024&w=1115"
              alt=""
            />
             <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <img
              width={1000}
              height={1000}
              src="https://static.zara.net/assets/public/6cac/e0ab/7e334e92a63b/7460501ed045/00085827800-e1/00085827800-e1.jpg?ts=1755788161355&w=723"
              alt=""
            />
             <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <img
              width={1000}
              height={1000}
              src="https://static.zara.net/assets/public/bf95/520a/3d5945f6b174/7820d3e27ba6/01223452700-e1/01223452700-e1.jpg?ts=1759392195051&w=723"
              alt=""
            />
            <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomWidgetProductGrid;
