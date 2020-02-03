import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Home = () => {
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonTitle, null, "Ionic Blank"))),
    React.createElement(IonContent, { className: "ion-padding" },
      "The world is your oyster.",
      React.createElement("p", null,
        "If you get lost, the",
        ' ',
        React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ionicframework.com/docs/" }, "docs"),
        ' ',
        "will be your guide."))))
}

export default Home
