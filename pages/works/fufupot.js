import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Projects = () => (
  <Layout title="fufupot">
    <Container>
      <Title>
        FufuPot <Badge>Spring 2024</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/fufupot2.webp" alt="banner" />
      </Center>
      <P>
        Client project for Generate Product Development Studio. The client was
        returning for a second semester to expand the scope of the project, this
        time including a touchscreen for controlling the machine.
      </P>
      <P>
        My task was to work on the part of the custom PCB&apos;s schematic that
        dealt with the touchscreen and develop the embedded user interface that
        controlled the FufuPot&apos;s functions.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>KiCAD Schematic, Embedded C/C++, Soldering</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Electrical and Computer Eningeer</span>
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
          <span>Spring 2024</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.instagram.com/p/C3yjFwnOlyP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <Badge mr={2}>Instagram</Badge>
            FufuPot&apos;s team post on @generatenu!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
        <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" /> */}
      {/* <WorkImage src="/images/works/amembo_04.jpg" alt="fufupot" /> */}
      <video width="1080" height="1920" controls preload="none">
        <source src="/images/works/fufu_ui.MOV" alt="fufu-ui" />
        Your browser does not support the video tag.
      </video>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
