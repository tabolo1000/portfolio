import { ElementRef, useRef, useState } from "react";
import emailjs from '@emailjs/browser';





export const useContact = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [send, isSend] = useState<boolean>(false)

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_biovsrq', 'template_gshfpii', form.current, {
                publicKey: 'mAQVmcHAXCrdNSN_m',
            })
                .then(
                    () => {
                        e.target.reset()
                        isSend(true)
                        setTimeout(() => {
                            isSend(false)
                        }, 1000)
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }

    };

    return {
        send,
        form,
        sendEmail,
    }
}