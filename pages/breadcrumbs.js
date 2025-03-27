import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'

const Breadcrumbs = () => (
  <Layout title="Breadcrumbs">
    <Container>
      <Heading as="h2" variant="page-title">
        Breadcrumbs..
        <br />
      </Heading>
      <Heading as="h2" fontSize={22}>
        I. Infinite Fireability
      </Heading>
      <Paragraph>
        The scale of fireability. When thinking about yourself as an employee,
        place yourself on the following scale. At one end, you have the 10x
        employee who keeps everything in their head and, if they left, you would
        not be able to replace them at all. This person is infinitely
        unfireable. At the other end, you have the employee that writes
        everything down and makes their work reproduceable and easy to onboard
        another person to do the same thing. This person is infinitely fireable.
        Theoretically, the infinitely unfireable engineer is more likely to
        survive a round of layoffs. But when they&apos;re at the right company,
        the company will keep the infinitely fireable employee. Coworkers also
        prefer the infinitely fireable employee, and coworkers tend to be the
        connections that matter more during a time where connections have an
        increasing impact on where you end up.
      </Paragraph>
      <Heading as="h2" fontSize={22}>
        II. The Main Thing
      </Heading>
      <Paragraph>
        &quot;The Main Thing is to keep the Main Thing the Main Thing.&quot;
        <br />
        The &quot;Main Thing&quot; refers to what made your business/team great
        in the first place. Scope creep and features that don&apos;t serve to
        make the Main Thing better should be politely turned away. A Hunanese
        restaurant should focus on increasing the appeal of Hunanese cuisine
        rather than investing in adding boba to their menu.
      </Paragraph>
      <Heading as="h2" fontSize={22}>
        III. Waste
      </Heading>
      <Paragraph>
        It&apos;s easy to track physical waste. However, from the lens of
        knowledge work, knowledge waste has the potential to be just as costly
        to a business. Minimizing knowledge waste could take the form of
        developing personnel management systems that reward individuals and
        teams for creating and teaching knowledge that contributes to robust
        profitability. For example, having a rotating host of a talk for a
        member of the team to teach other members an interesting problem they
        solved recently or going over how a subsystem was designed. Another
        example could be having formal retrospectives on a project.
      </Paragraph>
      <Heading as="h2" fontSize={22}>
        IV. On Being Bored
      </Heading>
      <Paragraph>
        Find some time every week to give yourself to be bored. We&apos;re
        evolved to let our minds wander regularly and failure to give yourself
        time to do so means you will go crazy!! Too stimulating. Time to be
        bored also gives time to reflect and think of new ideas. This also feeds
        into the idea of hanging out with yourself. Going out and spending time
        WITH yourself, not by yourself, can be revealing. :)
      </Paragraph>
    </Container>
  </Layout>
)

export default Breadcrumbs
export { getServerSideProps } from '../components/chakra'
