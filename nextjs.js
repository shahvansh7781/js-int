//Next.js is React's Framework for Web App. It has many extra features which React.js don't have like Routing,SEO,SSR,Middleware,Automatic Code Splitting,Image Optimization,

//State in Next.js
//It is a container which can only be used inside component and we want state data outside of component then pass it as props and not state itself.
//Difference between state and normal variable is if normal variable updates then component will not be re-rendered but if state updates then component will be re-rendered. And jaha jaha yeh state use hui hai uss data ko update kar dega.

//next.config.js vs jsconfig.json
//next.config.js has configuration of Next.js framework while jsconfig.json has JavaScript configuration

//Navigation
//import useRouter hook from next/navigation and use push() method.

//layout.js(Common Layout)
//It provides common area to all its child routes. Root layout content is for all pages and it serves as common part to whole application.
//So, Eg - We have about folder i.e /about route and if we make layout.js file inside about folder then content of this layout.js will be common to all children routes of about

//Dynamic Routing
//Create a folder name with [] and inside it create page.js and inside page.js get data by taking params as parameter inside it. Syntax - Folder-name =[param_name]

//Error Page
//Create a not-found.js file and its content will be served instead of Next.js's page.

//Middleware in Next.js
//Create middleware.js file and create function inside it and export it. Middleware is something that will execute on its own before routing request is called. It can be used when we want something that only logged in users can access this route then we create middleware and check in that function.

//CSS Modules vs Normal CSS(name.module.css)
//If we have normal css and a main class inside it then in whichever file we have main class all will have css mentioned of that main class. So, css overrides.
//While in CSS Modules we import CSS as object so there is no overriding.
//So, in Normal CSS if we have two different files but they have same classname then CSS will be ovveride but in CSS modules this will not happen

//SEO(metadata)
//For static title and description, we can use export const metadata object in every server component/page.
//For dynamic title and description i.e metadata , We have to export generateMetadata function which takes params as paramter and we can return title and description object from this function.