import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TableButtonAction } from 'src/app/Shared/tableButtonAction'

import { TableConsts } from 'src/app/Shared/tableConsts'


@Component({
  selector: '[action-buttons]',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() value!: string
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.delete })
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view })
  }

}
