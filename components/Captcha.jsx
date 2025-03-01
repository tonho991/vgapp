'use client'

import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export let recaptchaRef;

export default function Captcha () {
  recaptchaRef = useRef(null)

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      size='visible'
      sitekey='6Ldu0ZwqAAAAAPqX__L4l8XL1FVMj-1G44sP1Wsu'
      className='mt-3 mb-3'
    />
  )
}

export function resetCaptcha(){
    if(recaptchaRef){
        recaptchaRef.current.reset();
        return true;
    } return false;

}


