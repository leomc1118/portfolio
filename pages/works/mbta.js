import { Container, Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'

const Projects = () => (
  <Layout title="fufupot">
    <Container>
      <Title>
        Personal <Badge>2024</Badge>
      </Title>
      {/* <Center my={6}>
        <Image src="/images/works/forge.webp" alt="banner" />
      </Center> */}
      <P>IN PROGRESS</P>

      {/* <List ml={4} my={4}>
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
        <ListItem>
          <Meta>Download</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
            v0.5.15.123
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Progress</Meta>
          <span>Completed</span>
        </ListItem>
        <ListItem>
          <Meta>When</Meta>
          <span>Spring 2023</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem>
      </List> */}
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
