import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlatformService } from './services/platform.service';
import { ShellNoRenderDirective } from './directives/shell-no-render.directive';
import { ShellRenderDirective } from './directives/shell-render.directive';

const MODULES = [CommonModule, RouterModule];
const COMPONENTS = [];
const DIRECTIVES = [ShellNoRenderDirective, ShellRenderDirective];
const PIPES = [];

const PROVIDERS = [PlatformService];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
})
export class SharedMainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedMainModule,
      providers: [...PROVIDERS],
    };
  }
}
