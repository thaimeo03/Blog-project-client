export const getGoogleAuthUrl = () => {
  const NEXT_PUBLIC_GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const NEXT_PUBLIC_GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI

  const url = `https://accounts.google.com/o/oauth2/v2/auth`

  const query = {
    client_id: NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    redirect_uri: NEXT_PUBLIC_GOOGLE_REDIRECT_URI as string,
    response_type: 'code',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(
      ' '
    ),
    prompt: 'consent'
  }

  const queryString = new URLSearchParams(query).toString()
  return `${url}?${queryString}`
}
