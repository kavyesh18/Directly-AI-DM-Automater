import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
    title: string
    icon: React.ReactNode
    description: string
    strategy: 'INSTAGRAM' | 'CRM'
  }


export const INTEGRATION_CARDS: Props[] = [
    {
      title: 'Connect Instagram',
      description:
        'Unlock the full potential of your experience by linking your Instagram account',
      icon: <InstagramDuoToneBlue />,
      strategy: 'INSTAGRAM',
      
    },
    {
      title: 'Connect Salesforce',
      description:
        'Boost your efficiency and customer relationship management by integrating Salesforce',
      icon: <SalesForceDuoToneBlue />,
      strategy: 'CRM',
    },
  ]