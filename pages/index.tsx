import { Container, Text, Title } from "@components/ui"

import { Grid } from "@components/ui"
import Head from "next/head"
import { Item } from "@components/common"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Tailwindjit issue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white text-center">
        <div className="bg-primary pb-24 min-h-screen relative overflow-hidden">
          <Container>
            <div className="mb-10">
              <Title size="lg" className="pt-16">
                Section title
              </Title>
              <Text size="xl" className="mt-5 px-12">
                <p>Section text</p>
              </Text>
            </div>
            <Grid>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
              <div>
                <Item />
              </div>
            </Grid>
          </Container>
        </div>
      </section>
    </div>
  )
}
