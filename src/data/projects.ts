export type ProjectData = {
  title: string;
  image: string;
  source: string;
  desc: string;
}

export const projects: ProjectData[] = [
  {
    title: 'AmikomCare',
    image: 'https://github.com/pengdst/AmikomCare/raw/storage/amikomcare_home.jpg',
    source: 'https://github.com/pengdst/AmikomCare',
    desc: `An Android app to fulfill the final project. This app works as <span class="italic">Unoficial E-Klinik Apps on Amikom University</span>that allows you to reports disease.`,
  },
  {
    title: 'Golang Restful API',
    image: 'https://source.unsplash.com/800x400/?golang',
    source: 'https://github.com/pengdst/golang-restful-api',
    desc: `A go app as an exercise to learn the go language and Restful APIs.`,
  },
  {
    title: 'Hapi Web Server',
    image: 'https://source.unsplash.com/800x400/?nodejs',
    source: 'https://github.com/pengdst/ts-hapi-clean-server',
    desc: `A NodeJS webserver app using Hapi framework as a result from learning the NodeJS and Restful APIs written in Typescript.`,
  },
  {
    title: 'Viewbinding Delegate',
    image: 'https://source.unsplash.com/800x400/?kotlin',
    source: 'https://github.com/pengdst/viewbinding-delegate',
    desc: `A Kotlin Android app library to simplify when using lazy viewbinding.`,
  },
];