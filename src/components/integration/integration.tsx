import styles from './integration.module.css'

import {memo} from "react";
import AfricasTalking from '../../assets/logo/africas-talking.svg?react';
import Apns from '@/assets/logo/apns.svg?react';
import AzureSms from '@/assets/logo/azure-sms.svg?react';
import Bandwidth from '@/assets/logo/bandwidth.svg?react';
import Braze from '@/assets/logo/braze.svg?react';
import Brevo from '@/assets/logo/brevo.svg?react';
import BrevoSms from '@/assets/logo/brevo-sms.svg?react';
import BulkSms from '@/assets/logo/bulk-sms.svg?react';
import BurstSms from '@/assets/logo/burst-sms.svg?react';
import Cickatell from '@/assets/logo/clickatell.svg?react';
import Clicksend from '@/assets/logo/clicksend.svg?react';
import Discord from '@/assets/logo/discord.svg?react';
import EmailWebhook from '@/assets/logo/email-webhook.svg?react';
import Expo from '@/assets/logo/expo.svg?react';
import Fcm from '@/assets/logo/fcm.svg?react';
import Firetext from '@/assets/logo/firetext.svg?react';
import FortySixElks from '@/assets/logo/forty-six-elks.svg?react';
import GenericSms from '@/assets/logo/generic-sms.svg?react';
import Getstream from '@/assets/logo/getstream.svg?react';
import GrafanaOnCall from '@/assets/logo/grafana-on-call.svg?react';
import Gupshup from '@/assets/logo/gupshup.svg?react';
import InfobipEmail from '@/assets/logo/infobip-email.svg?react';
import InfobipSms from '@/assets/logo/infobip-sms.svg?react';
import IsendSms from '@/assets/logo/isend-sms.svg?react';
import Kannel from '@/assets/logo/kannel.svg?react';
import MagicBell from '@/assets/logo/magic-bell.svg?react';
import Mailersend from '@/assets/logo/mailersend.svg?react';
import Mailgun from '@/assets/logo/mailgun.svg?react';
import Mailjet from '@/assets/logo/mailjet.svg?react';
import Mailtrap from '@/assets/logo/mailtrap.svg?react';
import Mandrill from '@/assets/logo/mandrill.svg?react';
import Maqsam from '@/assets/logo/maqsam.svg?react';
import Mattermost from '@/assets/logo/mattermost.svg?react';
import Messagebird from '@/assets/logo/messagebird.svg?react';
import Msteams from '@/assets/logo/msteams.svg?react';
import Netcore from '@/assets/logo/netcore.svg?react';
import Nexmo from '@/assets/logo/nexmo.svg?react';
import Nodemailer from '@/assets/logo/nodemailer.svg?react';
import OneSignal from '@/assets/logo/one-signal.svg?react';
import Outlook365 from '@/assets/logo/outlook365.svg?react';
import PagerDuty from '@/assets/logo/pager-duty.svg?react';
import Plivo from '@/assets/logo/plivo.svg?react';
import Plunk from '@/assets/logo/plunk.svg?react';
import Postmark from '@/assets/logo/postmark.svg?react';
import PushWebhook from '@/assets/logo/push-webhook.svg?react';
import PusherBeams from '@/assets/logo/pusher-beams.svg?react';
import Pushpad from '@/assets/logo/pushpad.svg?react';
import Pushwoosh from '@/assets/logo/pushwoosh.svg?react';
import Resend from '@/assets/logo/resend.svg?react';
import RingCentral from '@/assets/logo/ring-central.svg?react';
import RocketChat from '@/assets/logo/rocket-chat.svg?react';
import Ryver from '@/assets/logo/ryver.svg?react';
import Sendchamp from '@/assets/logo/sendchamp.svg?react';
import Sendgrid from '@/assets/logo/sendgrid.svg?react';
import Sendinblue from '@/assets/logo/sendinblue.svg?react';
import Ses from '@/assets/logo/ses.svg?react';
import Simpletexting from '@/assets/logo/simpletexting.svg?react';
import Slack from '@/assets/logo/slack.svg?react';
import Sms77 from '@/assets/logo/sms77.svg?react';
import SmsCentral from '@/assets/logo/sms-central.svg?react';
import Sns from '@/assets/logo/sns.svg?react';
import Sparkpost from '@/assets/logo/sparkpost.svg?react';
import Telnyx from '@/assets/logo/telnyx.svg?react';
import Termii from '@/assets/logo/termii.svg?react';
import Twilio from '@/assets/logo/twilio.svg?react';
import Vonage from '@/assets/logo/vonage.svg?react';
import Zulip from '@/assets/logo/zulip.svg?react';

const integrations = [
    <AfricasTalking />,
    <Apns />,
    <AzureSms />,
    <Bandwidth />,
    <Braze />,
    <Brevo />,
    <BrevoSms />,
    <BulkSms />,
    <BurstSms />,
    <Cickatell />,
    <Clicksend className={'h-8 w-8'}/>,
    <Discord className={'h-8 w-8'}/>,
    <EmailWebhook className={'h-8 w-8'}/>,
    <Expo className={'h-8 w-8'}/>,
    <Fcm className={'h-8 w-8'} />,
    <Firetext className={'h-8 w-8'} />,
    <FortySixElks className={'h-8 w-8'} />,
    <GenericSms className={'h-8 w-8'} />,
    <Getstream className={'h-8 w-8'} />,
    <GrafanaOnCall className={'h-8 w-8'} />,
    <Gupshup className={'h-8 w-8'} />,
    <InfobipEmail className={'h-8 w-8'} />,
    <InfobipSms className={'h-8 w-8'} />,
    <IsendSms className={'h-8 w-8'} />,
    <Kannel className={'h-8 w-8'} />,
    <MagicBell className={'h-8 w-8'} />,
    <Mailersend className={'h-8 w-8'} />,
    <Mailgun className={'h-8 w-8'} />,
    <Mailjet className={'h-8 w-8'} />,
    <Mailtrap className={'h-8 w-8'} />,
    <Mandrill className={'h-8 w-8'} />,
    <Maqsam className={'h-8 w-8'} />,
    <Mattermost className={'h-8 w-8'} />,
    <Messagebird className={'h-8 w-8'} />,
    <Msteams className={'h-8 w-8'} />,
    <Netcore className={'h-8 w-8'} />,
    <Nexmo className={'h-8 w-8'} />,
    <Nodemailer className={'h-8 w-8'} />,
    // 'novu.svg',
    // 'novu-email.svg',
    // 'novu-sms.svg',
    <OneSignal className={'h-8 w-8'} />,
    <Outlook365 className={'h-8 w-8'} />,
    <PagerDuty className={'h-8 w-8'} />,
    <Plivo className={'h-8 w-8'} />,
    <Plunk className={'h-8 w-8'} />,
    <Postmark className={'h-8 w-8'} />,
    <PushWebhook className={'h-8 w-8'} />,
    <PusherBeams className={'h-8 w-8'} />,
    <Pushpad className={'h-8 w-8'} />,
    <Pushwoosh className={'h-8 w-8'} />,
    <Resend className={'h-8 w-8'} />,
    <RingCentral className={'h-8 w-8'} />,
    <RocketChat className={'h-8 w-8'} />,
    <Ryver className={'h-8 w-8'} />,
    <Sendchamp className={'h-8 w-8'} />,
    <Sendgrid className={'h-8 w-8'} />,
    <Sendinblue className={'h-8 w-8'} />,
    <Ses className={'h-8 w-8'} />,
    <Simpletexting className={'h-8 w-8'} />,
    <Slack className={'h-8 w-8'} />,
    <Sms77 className={'h-8 w-8'} />,
    <SmsCentral className={'h-8 w-8'} />,
    <Sns className={'h-8 w-8'} />,
    <Sparkpost className={'h-8 w-8'} />,
    <Telnyx className={'h-8 w-8'} />,
    <Termii className={'h-8 w-8'} />,
    <Twilio className={'h-8 w-8'} />,
    <Vonage className={'h-8 w-8'} />,
    <Zulip className={'h-8 w-8'} />
]

const Integration = memo(() => {
    return (
        <section className="container py-20 md:py-32 gap-10">
            <div
                className={`shadow-xl w-full p-2 md:p-4 max-w-screen-xl flex flex-col rounded-lg space-y-3`}>
                <div className={'inline-flex space-x-2 justify-center md:text-3xl font-bold my-8'}>
                    <div>over</div>
                    <div className={'underline decoration-wavy text-green-500'}>100</div>
                    <div>integrations</div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    {integrations.map(e => (
                        <div key={e.key} className={`p-1 rounded-lg ${styles.shad} aspect-square w-fit cursor-pointer`}>
                            {e}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Integration;