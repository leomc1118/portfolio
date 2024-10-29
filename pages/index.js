import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Leo Chen
          </Heading>
          <Heading as="h2" fontSize={22}>
            陈墨
          </Heading>
          <p>Computer Engineer ( Embedded / Schematics / Layout )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/leo.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I&apos;m an undergraduate Class of 2026 Computer Engineering student
          at Northeastern University pursuing passion in mobile and desktop
          applications, embedded systems, and computer hardware. Recently, I was
          an Electrical Engineer Co-op at Boston Engineering Corporation!
        </Paragraph>
        <Paragraph>
          Starting in middle school, when I built my first gaming PC, I&apos;ve
          been passionate about engineering and technology. I specifically took
          interest in consumer electronics, in which I observed successful and
          unsuccessful user interface implementations. I would find myself
          thinking about how I would have done things differently. My family
          currently runs a restaurant called Sumiao Hunan Kitchen, which was
          featured in the New York Times Top 20 Restaurants in Boston in 2024.
          My roles at the restaurant has included working as website
          administrator, assistant manager, server, host, and menu designer.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
          >
            My projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Cambridge, Massachusetts.
        </BioSection>
        <BioSection>
          <BioYear>2011 </BioYear>
          Moved to Bedford, Massachusetts.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started attending Northeastern University.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Generate Product Development Studio ECE.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          EE Co-op at Boston Engineering Corporation (Jan - June)
        </BioSection>
        <BioSection>
          <BioYear>Now </BioYear>
          Generate Product Development Studio Project Lead.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Embedded Software Engineer Co-op.
        </BioSection>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://docs.google.com/document/d/1bT1LSOyjRK8kf0xptOQD4NmxSyXBjoI_LaFz-ths0lY/edit?usp=sharing"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
          >
            My resume
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="/images/goKart.JPG" target="_blank" color={'green.500'}>
            Fast Cars
          </Link>
          , Engineering, Reading, Cooking, Gaming, Tennis, Foodie Activities,
          and Watching Sports!!
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Current Song Obsession
        </Heading>
        <Box borderRadius="12px" overflow="hidden" width="100%" height="152px">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3nZIiM8v7Y1fcxmmqAYHh9?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/leomc1118" target="_blank">
              <Button
                variant="ghost"
                color={'green.500'}
                leftIcon={<IoLogoGithub />}
              >
                @leomc1118
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/leonardo-mo-chen/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color={'green.500'}
                leftIcon={<IoLogoLinkedin />}
              >
                Leonardo (陈墨) Chen
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:leomc1118@gmail.com" target="_blank">
              <Button
                variant="ghost"
                color={'green.500'}
                leftIcon={<EmailIcon />}
              >
                leomc1118@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}
        {/*
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
