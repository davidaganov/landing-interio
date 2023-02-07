import { useState, useEffect, useRef } from "react"
import styles from "./Carousel.module.scss"
import cn from "classnames"

import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"

export const Carousel = ({ children }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [length, setLength] = useState<number>(children.length)

  const prevBtn = useRef<HTMLButtonElement | null>(null)
  const nextBtn = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const handleNextClick = () => {
    if (currentIndex >= length - 2) {
      prevBtn.current && prevBtn.current.focus()
    }

    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const handlePrevClick = () => {
    if (currentIndex <= 1) {
      nextBtn.current && nextBtn.current.focus()
    }

    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContentWrapper}>
            <div
              className={styles.carouselContent}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.control}>
        <button
          className={cn(styles.arrow, styles.leftArrow, {
            [styles.disabled]: currentIndex <= 0
          })}
          onClick={() => handlePrevClick()}
          tabIndex={currentIndex <= 0 ? -1 : 0}
          ref={prevBtn}
          aria-label="Select the previous slide"
        >
          <ArrowIcon />
        </button>
        <button
          className={cn(styles.arrow, styles.rightArrow, {
            [styles.disabled]: currentIndex >= length - 1
          })}
          onClick={() => handleNextClick()}
          tabIndex={currentIndex >= length - 1 ? -1 : 0}
          ref={nextBtn}
          aria-label="Select the next slide"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}
