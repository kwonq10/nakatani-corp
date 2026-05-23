import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { sendContactNotification } from '../lib/sendContactNotification'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'お名前',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'メールアドレス',
    },
    {
      name: 'company',
      type: 'text',
      required: false,
      label: '会社名・屋号',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'お問い合わせ内容',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            await sendContactNotification(doc)
          } catch (err) {
            console.error('[Contacts] メール通知の送信に失敗しました:', err)
          }
        }
      },
    ],
  },
}
