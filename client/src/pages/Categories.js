import Category from "../components/category/Category";
import React from 'react';
import { DeviceMobileSpeaker, DeviceTabletSpeaker, Watch, Usb } from '@phosphor-icons/react';
import "./Categories.css";

const Categories = () => {
    return (
        <div>
         <h1 className="categories-title">Categorías</h1>
        <section className="categories">
            <Category category="Smartphones" >
                <DeviceMobileSpeaker size={32} color="#017cfe" weight="duotone" />
            </Category>
            <Category category="Tablets">
                <DeviceTabletSpeaker size={32} color="#017cfe" weight="duotone" />
            </Category>
            <Category category="Smartwatches">
                <Watch size={32} color="#017cfe" weight="duotone" />
            </Category>
            <Category category="Accesorios">
                <Usb size={32} color="#017cfe" weight="duotone" />
            </Category>
        </section>
        </div>
    )
}

export default Categories;