import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import IndividualInfo from './IndividualInfo';

const characterList = [
 {
    name: "Constance Wu",
    role: "Rachel Chu",
    information: "Constance Wu was born March 22, 1982 in Richmond, Virginia. Her mother is a computer programmer and her father is a college professor. Both are Taiwanese immigrants. Constance grew up in Richmond performing in the local community theatre scene. At sixteen, she moved to New York to study at the famed Lee Strasberg Theatre Institute and she's been busy ever since. While in New York, she worked in classical theatre and quickly transitioned to film work. She soon appeared in several Sundance Feature Films. In 2010, she moved to Los Angeles where her theatre and film background helped land her a role in another Sundance Feature, 'The Sound of My Voice.' She enjoys long-distance running, camping, piano, and reading. She lives in Silverlake, Los Angeles with her pet bunny Lida Rose.",
    movie: [
         "Stephanie Daley",
         "Year of the Fish",
         "The Sound of My Voice",
         "Fresh Off the Boat",
         "Best Friends Forever",
         "Parallels",
         "The Lego Ninjago Movie "
      ],
    image: "rachel.png"
 },
 {
   name: "Henry Golding",
   role: "Nick Young",
   information: "Malaysian television host, actor, and model Henry Ewan Golding was born in Kuching, Sarawak, Malaysia, to Margaret Likan and Clive Golding. His father is English and his mother is Malaysian. His mother is from the Iban people, an Indigenous group in Sarawak, and Henry completed the bejalai, an Iban rite of passage, in the jungles of Borneo. Henry spent his early years in Terengganu. His family moved from Malaysia to Surrey, England when he was eight. When he was twenty one, he moved back to Malaysia, living in Kuala Lumpur, pursuing acting work, and becoming known as a host of travel shows.",
   movie: [
        "Crazy Rich Asians",
        "A Simple Favor",
        "Monsoon"
     ],
   image: "nick.jpg"
 },
 {
   name: "Michelle Yeoh",
   role: "Eleanor Young",
   information: "Born as Yang Zi Qiong in the mining town of Ipoh, in West Malaysia, in the lunar year of the Tiger, Michelle is the daughter of Janet Yeoh and Yeoh Kian Teik, a lawyer and politician. She is of Han Chinese (Hokkien) descent, and spoke English and Malay before Chinese. A ballet dancer since age 4, she moved to London, England to study at the Royal Academy as a teenager. After a brief dance career, she won the Miss Malaysia beauty pageant title in her native country and the Miss Moomba beauty pageant title in Melbourne, Australia in the early 1980s. Her first on camera work was a 1984 commercial with martial arts star Jackie Chan. In 1985, she began making action movies with D&B Films of Hong Kong. She was first billed as Michelle Khan, then later, Michelle Yeoh. Never a trained martial artist, she relied on her dance discipline and her on-set trainers to prepare for her martial arts action scenes.",
   movie: [
        "Tai-Chi Master",
        "Crouching Tiger, Hidden Dragon",
        "Tomorrow Never Dies",
        "The Mummy: Tomb of the Dragon Emperor",
        "2011 Kung Fu Panda 2",
        "Guardians of the Galaxy Vol. 2 ",
        "The Lego Ninjago Movie "
     ],
   image: "eleanor.jpg"
 },
 {
   name: "Gemma Chan",
   role: "Astrid Young Teo",
   information: "Gemma Chan (born 29 November 1982) is a British film, television, and theatre actress and former fashion model. She was born at Guy's Hospital in London, England. Her father grew up in Hong Kong and was an engineer. Her mother, a pharmacist at Guy's Hospital, emigrated from pre-Cultural Revolution Communist China via Hong Kong with her parents (Chan's maternal grandparents) and younger sister, growing up in Greenock, Scotland. Chan was raised near Sevenoaks, a town in west Kent, in South East England and attended Newstead Wood School for Girls in Orpington in the London borough of Bromley. She later went on to read law at Worcester College, Oxford. Following graduation, Chan gained a training contract offer as a graduate at the law firm Slaughter and May, but instead pursued an acting career and studied at the Drama Centre London. Spotted at her showcase by British film producer Damian Jones, she signed to acting agent Nicki van Gelder.",
   movie: [
        "Submarine",
        "Vengar",
        "Families",
        "Fantastic Beasts and Where to Find Them",
        "Transformers: The Last Knight",
        "London Fields"
     ],
   image: "astrid.jpg"
 },
 {
   name: "Lisa Lu",
   role: "Ah Ma",
   information: "Lisa Lu was born on January 19, 1927 in Beijing, China as Yen Chun Lu. She is an actress and producer, known for 2012 (2009), Qing guo qing cheng (1975) and The Last Emperor (1987).",
   movie: [
        "The Last Emperor",
        "Hiroshima: Out of the Ashes",
        "The Joy Luck Club",
        "12 Golden Ducks"
     ],
   image: "ah-ma.jpg"
 }
];

function Character(){
  
  return (
    <div>
      <br/>
      <Link to="/Rachel">Rachel Chu</Link>
      <br/>
      <Link to="/Nick">Nick Young</Link>
      <br/>
      <Link to="/Eleanor">Eleanor Young</Link>
      <br/>
      <Link to="/Astrid">Astrid Young Teo</Link>
      <br/>
      <Link to="/AhMa">Ah Ma</Link>
      <br/>

      <Switch>
        <Route exact path='/Rachel' component={() => <IndividualInfo
          name={characterList[0].name}
          role={characterList[0].role}
          information={characterList[0].information}
          movie={characterList[0].movie}
          image={characterList[0].image} />} />
        <Route exact path='/Nick' component={() => <IndividualInfo
          name={characterList[1].name}
          role={characterList[1].role}
          information={characterList[1].information}
          movie={characterList[1].movie}
          image={characterList[1].image} />} />
        <Route exact path='/Eleanor' component={() => <IndividualInfo
          name={characterList[2].name}
          role={characterList[2].role}
          information={characterList[2].information}
          movie={characterList[2].movie}
          image={characterList[2].image} />} />
        <Route exact path='/Astrid' component={() => <IndividualInfo
          name={characterList[3].name}
          role={characterList[3].role}
          information={characterList[3].information}
          movie={characterList[3].movie}
          image={characterList[3].image} />} />
        <Route exact path='/AhMa' component={() => <IndividualInfo
          name={characterList[4].name}
          role={characterList[4].role}
          information={characterList[4].information}
          movie={characterList[4].movie}
          image={characterList[4].image} />} />
      </Switch>
    </div>
  );
}

export default Character;
