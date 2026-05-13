'use client'

import styles from './page.module.css'

export default function PrintButton() {
  return (
    <button
      className={styles.printBtn}
      onClick={() => window.print()}
      aria-label="Download this guide as PDF"
      data-pdf-hide="false"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-2M7 9V3h10v6M7 17v4h10v-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Download PDF
    </button>
  )
}
