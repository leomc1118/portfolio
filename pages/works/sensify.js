import {
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Projects = () => (
  <Layout title="Sensify">
    <Container>
      <Title>
        Sensify <Badge>Fall 2024</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/works/sensify_base.gif"
          alt="Base Controller Render"
          objectFit={'contain'}
        />
      </Center>
      <P>
        Client project for Generate Product Development Studio. The client was
        looking for a modular virtual reality controller that could be augmented
        with attachments to reflect the object a user would be holding in a
        virtual reality application. The Sensify team settled on creating drill
        and vise attachments for virtual reality space training applications.
      </P>
      <P>
        My task was to lead ideation of the project, ensure the project was
        hitting its timeline targets, and advocate for my team member&apos;s
        personal and techincal development.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Leadership, Project Management, Mentorship, and Soldering</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Project Lead</span>
        </ListItem>
        <ListItem>
          <Meta>Club</Meta>
          <span>Generate Product Development Studio</span>
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
          <span>Fall 2024</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem> */}
      </List>
      <Center my={6}>
        <Image
          src="/images/works/sensify_drill.gif"
          alt="Base Controller Render"
          objectFit={'contain'}
        />
      </Center>
      <Center my={6}>
        <Image
          src="/images/works/sensify_vise.gif"
          alt="Base Controller Render"
          objectFit={'contain'}
        />
      </Center>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
