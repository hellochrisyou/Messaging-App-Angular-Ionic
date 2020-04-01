import { Component, OnInit, AfterViewInit, OnDestroy, Input, ChangeDetectorRef, ContentChild, TemplateRef, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EmitService } from '../../../core/service/emit.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  index: number;
  emitObject: any;

  @Input()
  public get columnObjects() {
    return this._columnObjects;
  }
  public set columnObjects(colObjArr: any[]) {
    if (colObjArr) {
      this.columnIds = colObjArr.map(c => c.columnId);
    }
    this._columnObjects = colObjArr;
  }

  @Input()
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(value: any[]) {
    this._dataArray = value;
    console.log("TableComponent -> setdataArray -> value", value);
    this.changeDetectorRefs.markForCheck();
    this.refresh();
  }

  @Input()
  public get colDisplay(): string {
    return this._colDisplay;
  }
  public set colDisplay(value: string) {
    this._colDisplay = value;
  }
  constructor(
    private emitService: EmitService,
    private changeDetectorRefs: ChangeDetectorRef,

  ) {
  }

  dataSource: MatTableDataSource<any>;

  public columnIds: string[] = [];
  public _columnObjects: any[];
  private _dataArray: any[];
  private _colDisplay: string;

  @ContentChild('buttonTemplate', { static: false }) optionTemplateRef: TemplateRef<any>;
  @ContentChild('buttonTemplate2', { static: false }) optionTemplateRef2: TemplateRef<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public ngOnInit(): void {
    // this.emitObject = this.emitService.refreshTableOutput.subscribe(x => {
    //   this.refresh();
    // });
    this.refresh();
  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {
    this.emitObject.unsubscribe();
  }

  public refresh(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // if (!this.changeDetectorRefs['destroyed']) {
    //   this.changeDetectorRefs.detectChangeChanges();
    // }
  }

  // SORTING
  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // public setDataColor(value: number | string) {
  //   if (value >= 1) {
  //     return '#4bb543';

  //   } else if (value < 1) {
  //     return '#dd0031';
  //   } else {
  //     return;
  //   }
  // }

  public openBidDialog() {

  }

}
