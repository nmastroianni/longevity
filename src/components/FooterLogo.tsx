import { cn } from '@/lib/utils/cn'
type FooterLogoProps = {
  className?: string
}

export default function FooterLogo({ className }: FooterLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="397.575"
      // height="107.823"
      viewBox="0 0 397 107"
      className={cn(className)}
    >
      <g fill="#FFF">
        <path d="M178.727 37.365h218.848v4.361H178.727zM43.601 22.69a21.26 21.26 0 0115.134 6.269l13.088 13.088 4.358-4.358-13.088-13.088c-5.206-5.207-12.129-8.074-19.492-8.074-6.273 0-12.221 2.088-17.066 5.923l4.392 4.392a21.247 21.247 0 0112.674-4.152z"></path>
        <path d="M76.998 49.679l7.202-7.202.001.001 7.362-7.362-4.358-4.358-8.978 8.978-.002-.002-4.358 4.358.002.002-15.133 15.134c-4.043 4.043-9.417 6.269-15.134 6.269s-11.092-2.226-15.135-6.269c-6.153-6.153-7.763-15.15-4.842-22.799l-4.67-4.67c-5.155 10.323-3.442 23.229 5.154 31.826 5.207 5.207 12.129 8.074 19.492 8.074 7.363 0 14.286-2.867 19.492-8.074l13.905-13.906z"></path>
        <path d="M132.347 24.601c-5.206-5.207-12.129-8.074-19.492-8.074-6.269 0-12.215 2.085-17.058 5.917l4.392 4.392c3.65-2.691 8.046-4.146 12.666-4.146a21.264 21.264 0 0115.135 6.269c8.345 8.345 8.345 21.924 0 30.269a21.261 21.261 0 01-15.134 6.269 21.26 21.26 0 01-15.134-6.269L84.63 46.137l-4.358 4.358 13.091 13.091c5.206 5.207 12.129 8.074 19.492 8.074 7.363 0 14.286-2.867 19.492-8.074 10.748-10.749 10.748-28.237 0-38.985z"></path>
        <path d="M78.228 17.69l34.627 34.627 16.483-16.483a18.538 18.538 0 00-3.447-4.777c-.082-.082-.169-.159-.254-.238l-12.782 12.782-30.269-30.269-4.358-4.358-4.358 4.358-8.96 8.96 4.358 4.358 8.96-8.96zM19.386 84.94l-.953-6.163h-.001L8.975 17.69l34.626 34.627 17.204-17.204-4.357-4.358-12.847 12.846-30.269-30.269L0 0l2.885 18.633 6.572 42.454 4.504 29.096.593 3.827h121.112l-.451 2.915H15.005l.954 6.162h124.538l.219-1.417 1.186-7.66.954-6.163H19.836z"></path>
        <path d="M143.124 13.332l-9.023 9.023c.083.081.169.159.251.241a30.71 30.71 0 013.719 4.505l9.411-9.411-9.457 61.087H21.342l.953 6.163h121.011l.808-5.22 9.457-61.087L156.456 0l-13.332 13.332zm35.603-5.77h5.42l-.031 19.746h12.488v4.924h-17.877V7.562zm19.816 12.326c0-7.197 5.748-12.798 13.249-12.798s13.249 5.601 13.249 12.798-5.748 12.836-13.249 12.836-13.249-5.639-13.249-12.836zm21.088.01c0-4.543-3.516-7.762-7.854-7.762-4.337 0-7.854 3.218-7.854 7.762 0 4.543 3.516 7.761 7.854 7.761 4.338.001 7.854-3.218 7.854-7.761zm10.677-12.336h5.365l12.515 16.681V7.562h5.388v24.67h-5.309l-12.54-16.654v16.654h-5.42V7.562zm28.566 12.365c0-7.197 5.748-12.836 13.249-12.836 4.25 0 7.938 1.811 10.336 4.69l-4.159 3.252c-1.438-1.795-3.677-2.877-6.192-2.877-4.337 0-7.854 3.218-7.854 7.761s3.516 7.761 7.854 7.761c2.549 0 4.815-1.265 5.982-2.798v-4.963h5.42v6.693c-2.452 3.572-6.653 6.115-11.387 6.115-7.501-.001-13.249-5.602-13.249-12.798zm30.107-12.365h19.468v4.917h-14.08v4.315l9.887.024v4.762h-9.887v5.724h14.111v4.927h-19.5V7.562zm21.049 0h6.034l7.698 15.337 7.747-15.337h5.921l-13.606 25.731L310.03 7.562zm30.377 0h5.42v24.67h-5.42V7.562zm17.432 4.924h-7.84l-.031-4.924h21.038v4.924h-7.833v19.746h-5.335V12.486zm23.951 9.718L371.402 7.562h6.424l6.663 9.59 6.663-9.59h6.423l-10.389 14.642v9.997h-5.396v-9.997zM178.727 48.315h12.817v58.343h-12.817V48.315zm25.343 29.242c0-17.021 13.594-30.357 31.333-30.357 10.053 0 18.774 4.283 24.444 11.092l-9.836 7.691c-3.4-4.245-8.695-6.804-14.643-6.804-10.257 0-18.573 7.611-18.573 18.355s8.316 18.355 18.573 18.355c6.044 0 11.413-2.642 14.806-7.009l9.985 7.529c-5.66 7.003-14.517 11.414-24.755 11.414-17.74 0-31.334-13.246-31.334-30.266zm63.358-.091c0-17.021 13.594-30.266 31.333-30.266 17.739 0 31.333 13.246 31.333 30.266 0 17.02-13.594 30.357-31.333 30.357-17.739 0-31.333-13.337-31.333-30.357zm49.871.024c0-10.744-8.316-18.355-18.574-18.355-10.257 0-18.573 7.611-18.573 18.355s8.316 18.355 18.573 18.355c10.259 0 18.574-7.611 18.574-18.355zm25.247-29.175h12.688l29.598 39.45v-39.45h12.743v58.343H385.02l-29.657-39.386v39.386h-12.817V48.315z"></path>
      </g>
    </svg>
  )
}
