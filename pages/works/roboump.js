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
  <Layout title="RoboUmp">
    <Container>
      <Title>
        RoboUmp <Badge>Fall 2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/roboump_BMS.webp" alt="banner" />
      </Center>
      <P>
        Client project for Generate Product Development Studio. The client was
        looking for a portable and automated umpire system that could be made
        cheaply. The target demographic was towards baseball players who would
        like to play baseball without depending on the attendance of a human
        umpire.
      </P>
      <P>
        My task was to spec ICs and passives and work on the schematic and
        layout for the custom battery management system PCB that was responsible
        for the RoboUmp&apos;s battery cells discharging and charging.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>KiCAD Schematic and Layout, Embedded Python, Soldering</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Electrical and Computer Engineer</span>
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
          <span>Fall 2023</span>
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
