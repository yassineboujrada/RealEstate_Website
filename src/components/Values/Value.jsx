import React from 'react'
import './value.css'
import { useState } from 'react'
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'

const Value = () => {
  const [classDecore,setClassDecore] = useState(null)

  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth v-container flexCenter">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="value" />
                </div>
            </div>

            <div className="v-right flexColStart">
                <span className="orangeText">Our Values</span>
                <span className="primaryText">We are committed to our customers</span>
                <span className="secondaryText">We always ready to help you by providing best residences</span>

                <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item,index)=>{
                            return(
                                <AccordionItem key={index} uuid={index} className={`accordionItem ${classDecore}`}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({ expanded }) => (expanded ? setClassDecore("collapsed") : setClassDecore("expanded"))}
                                            </AccordionItemState>
                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value