import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-protable-text',
  standalone: false,
  templateUrl: './protable-text.component.html',
  styleUrl: './protable-text.component.scss',
})
export class ProtableTextComponent implements OnChanges {
  @Input() blocks: any[] = [];

  renderedBlocks: any[] = [];

 
constructor(private sanitizer: DomSanitizer) {}


 ngOnChanges(): void {
    this.groupLists();
  }

  private groupLists(): void {

    this.renderedBlocks = [];

    let currentList: any = null;

    this.blocks.forEach(block => {

      if (block.listItem === 'bullet') {

        if (!currentList) {

          currentList = {
            type: 'bullet',
            items: []
          };

          this.renderedBlocks.push(currentList);

        }

        currentList.items.push(block);

      } else {

        currentList = null;

        this.renderedBlocks.push(block);

      }

    });

  }
  renderChildren(children: any[]): SafeHtml {

  let html = '';

  children.forEach((child: any) => {

    let text = child.text;

    if (child.marks?.includes('strong')) {
      text = `<strong>${text}</strong>`;
    }

    if (child.marks?.includes('em')) {
      text = `<em>${text}</em>`;
    }

    html += text;

  });

  return this.sanitizer.bypassSecurityTrustHtml(html);

}

  getText(children: any[]): string {
    return children?.map(c => c.text).join('') || '';
  }

}
