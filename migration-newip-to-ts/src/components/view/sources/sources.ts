import './sources.css';
import { sourceResponseContent } from '../../../types/index';

class Sources {
    draw(data: sourceResponseContent[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            if (sourceItemTemp !== null) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

                if (sourceClone !== null) {
                    const sourceItemName = sourceClone.querySelector('.source__item-name');
                    if (sourceItemName !== null) sourceItemName.textContent = item.name;

                    const sourceItem = sourceClone.querySelector('.source__item');
                    if (sourceItem !== null) sourceItem.setAttribute('data-source-id', item.id);
                }
   
                fragment.append(sourceClone);
            }
        });

        const sources = document.querySelector('.sources');
        if(sources !== null) sources.append(fragment);
    }
}

export default Sources;
