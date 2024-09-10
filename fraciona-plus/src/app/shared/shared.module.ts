import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ClickedDirective } from './clicked.directive';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    ClickedDirective
  ],
  imports: [],
  exports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DividerModule,
    ToastModule,
    InputGroupModule,
    CardModule,
    TagModule,
    ToggleButtonModule,
    TabViewModule,
    OverlayPanelModule,
    MenuModule,
    IconFieldModule,
    SplitButtonModule,
    InputIconModule,
    ChipModule,
    RippleModule,
    AvatarModule,
    MessagesModule,
    AvatarGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    MatRippleModule,
    ChartModule,
    TimelineModule,
    ImageModule,
    EditorModule,
    FileUploadModule,
    MatButtonModule,
    MatDialogModule,
    CarouselModule,
    BadgeModule,
    ClickedDirective
  ]
})
export class SharedModule { }
