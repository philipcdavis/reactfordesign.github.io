import React from 'react'
import Logo from '../components/Logo'
import Layout from '../components/layout'
import { GlobalStyle, color } from '../Tile'
import ProgressList from '../components/ProgressList'
import PurchaseCard from '../components/PurchaseCard'
import { Text, Heading } from 'rebass'


const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <Logo mt={5} mb={2} mx='auto' display='block' />
      <Heading mb="30px" align="center" fontSize={[3,4]} color={color.white}>React for Design</Heading>
      <Text fontSize={[18, 21]} my={20}>{`React is a powerful design tool. If you're interested in using React for design work but not sure what that would look like I'm making resources for you.`}</Text>
      <Text fontSize={[18, 21]} my={20}>You can use react to create complex interfaces, interactive prototypes, and cross functional resources.</Text>
      <Text fontSize={[18, 21]} my={20}>{`I'm just getting started. I've completed the first few lessons, but more are coming. If you're interested in getting early access, you can purchase now. The price will be going up as more resources are released.`}</Text>

      <ProgressList my={5}/>

      <PurchaseCard />

    </Layout>
  </React.Fragment>
)

export default IndexPage
