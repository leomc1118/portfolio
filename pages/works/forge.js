import {
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Projects = () => (
  <Layout title="fufupot">
    <Container>
      <Title>
        FufuPot <Badge>Spring 2024</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/forge.webp" alt="banner" />
      </Center>
      <P>
        Team project for Forge Product Development. I&apos;m unfortunately not
        in the picture because I had to depart the showcase event early. I had
        mentioned that odors would stain shoes and over time result in an
        unpleasant experience for all interested parties. The Shoe and Clothes
        Deodorizer (we ran out of time for the name) was the team&apos;s
        solution to this problem. Using fast air and UV light, the product aimed
        to make it easy to regularly deodorize, which would make shoes last
        longer and make workout shoes more pleasant.
      </P>
      <P>
        My task was to work with a 3rd year Mechanical Engineer to CAD the
        necessary parts to move fast air into the shoes and place the UVs at
        effective locations.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Solidworks, 3D Printing, Hand and Power Tools</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Product Lab Member</span>
        </ListItem>
        <ListItem>
          <Meta>Club</Meta>
          <span>Forge Product Development Studio</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
            v0.5.15.123
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Progress</Meta>
          <span>Completed</span>
        </ListItem>
        <ListItem>
          <Meta>When</Meta>
          <span>Spring 2023</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem> */}
      </List>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
