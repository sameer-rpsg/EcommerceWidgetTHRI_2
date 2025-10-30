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
        <EcomWidgetCard imgSrc="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-09-23T07%253A37%253A20.907Z-Method-Dressing-New3.jpg&w=3840&q=75" />
        <div className={styles.EcomPrdGrid}>
          <div className={styles.EcomPrdGridImgCntr}>
            <Image
              width={1000}
              height={1000}
              src="/dfubt0jl0fqb6awf06ue.webp"
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
            <Image
              width={1000}
              height={1000}
              src="/q5rmlpgcmfnaqcoimgtu.webp"
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
            <Image
              width={1000}
              height={1000}
              src="/t2tydn9jsxbrb5oh82hs.webp"
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
            <Image
              width={1000}
              height={1000}
              src="/jn0euaqz2i0yhqw7usww.webp"
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
