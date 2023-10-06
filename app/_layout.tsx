import { Slot } from "expo-router"
import Head from "expo-router/head"

export default function RootLayout() {
  return (
    <>
      <Head>
        <title>Expo Router Layouts Demo</title>
        <meta name='description' content='Expo Router Layouts Demo' />
      </Head>
      <Slot />
      {/* <Tabs
        screenOptions={{
          tabBarInactiveTintColor: "#000",
        }}
      /> */}
    </>
  )
}
