import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Exit, Container, Title, TitleContent, Clear, DescCont, Button, TextCtd } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';



const VisualizarConteudo = () => {



    return(

        <>
            
            <Exit>
                <Link to="/Home">
                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>
            
            <Container>

                <Title>Português - Turma 345</Title>

                <Clear></Clear>

                <TitleContent>Linguagem Estruturada</TitleContent>

                <Clear></Clear>
                <Clear></Clear>
                <Clear></Clear>

                <TextCtd>Ears back wide eyed. Litter kitter kitty litty little kitten big roar roar feed me 
                    caticus cuteicus, so lick face hiss at owner, pee a lot, and meow repeatedly scratch
                     at fence purrrrrr eat muffins and poutine until owner comes back and unwrap toilet paper
                      run up and down stairs. Annoy owner until he gives you food say meow repeatedly
                       until belly rubs, feels good love you, then bite you so jump launch to pounce upon
                        little yarn mouse, bare fangs at toy run hide in litter box until treats are fed.
                         Cough hairball on conveniently placed pants i can haz or pee in the shoe for cats
                          are a queer kind of folk. Commence midnight zoomies touch my tail, i shred your
                           hand purrrr or step on your keyboard while you're gaming and then turn in a circle
                            make meme, make cute face. Cat walks in keyboard lick human with sandpaper tongue
                             so sleeps on my head and destroy couch as revenge. Drool tickle my belly at your
                              own peril i will pester for food when you're in the kitchen even if it's salad or
                               chase after silly colored fish toys around the house climb leg, yet eat too much then
                                proceed to regurgitate all over living room carpet while humans eat dinner cough 
                    furball into food bowl then scratch owner for a new one.</TextCtd>
            </Container>
        </>
    )
}

export default VisualizarConteudo;