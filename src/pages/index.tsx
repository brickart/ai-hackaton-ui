

import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ButtonComponent } from "~/components/button.component";
import { ControllerButtonComponent } from "~/components/controller.component";
import { EndpointComponent } from "~/components/endpoint.component";
import { InputComponent } from "~/components/input.component";
import { LoaderComponent } from "~/components/loader.component";
import { Controller } from "~/hooks/response";
import { useGenerateApiDoc } from "~/hooks/use-generate-api-doc.hook";

const Home: NextPage = () => {
  const { data, loading, loadData } = useGenerateApiDoc();
  const [controller, setController] = useState<Controller | null>(null)
  const [string, setString] = useState<string>('')

  return (<>
    <Head>
      <title>AI-DOC</title>
      <meta name="description" content="Generate API doc" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="w-screen min-h-screen h-full bg-stone-900">
      {!data && (<div className="w-screen h-screen flex items-center justify-center">
        {loading ? (<LoaderComponent />) : (
          <div className="flex flex-row space-x-2">
            <InputComponent onChange={(e) => setString(e.target.value)} />
            <ButtonComponent onClick={loadData(string)} disabled={!string} />
          </div>
        )}
      </div>)}

      {data && (
        <div className="w-full h-full flex flex-row">
          <div className="h-full w-60 p-6 space-y-2">
            { Array.isArray(data.controllersDescriptions) && data.controllersDescriptions.flat().map((controller) => (
              <ControllerButtonComponent
                onClick={() => setController(controller)}
              >{controller.controllerName}</ControllerButtonComponent>
            ))}
          </div>
          <div className="h-full flex-1 p-6 space-y-3 flex flex-col  ">
            <span className="text-stone-100 font-bold">Description</span>
            <span className="text-stone-100 mb-6">{data.serviceDescription}</span>
          
            {controller && (<div className="w-full p-6 border-stone-500 border-2 rounded flex flex-col space-y-2">
              <span className="text-stone-100">{controller.controllerName}</span>
              <span className="text-stone-100">{controller.controllerDescription}</span>

              <div className="w-full rounded p-6 border-stone-500 border-2 flex flex-col space-y-2">
                {controller.endpoints.map(endpoint => (
                  <EndpointComponent endpoint={endpoint} />
                ))}

              </div>

            </div>)}
          </div>
      </div>
      )}
    </main>
  </>);
};

export default Home;
