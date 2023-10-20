import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, map } from 'rxjs';
import { FbzFormItensComponent } from 'src/app/shared/lib/components/fbz-form-itens/fbz-form-itens.component';
import { FbzTimerComponent } from 'src/app/shared/lib/components/fbz-timer/fbz-timer.component';
import { TIMER_SERVICE, TimerService } from 'src/app/shared/lib/components/fbz-timer/timer.service';

@Component({
	selector: 'app-jira',
	templateUrl: './jira.component.html',
	styleUrls: ['./jira.component.scss'],
})
export class JiraComponent implements AfterViewInit {

	@ViewChild(FbzTimerComponent) fbzTimer?: FbzTimerComponent;

	colunasTabela: any;
	acoesTabela: any
	dadosTabela: any[] = [];

	meuFormulario!: FormGroup;

	listRef: any;
	list: Observable<any[]>;
	atividadeSelecionada: any = null;;
	private startTimer$!: Subscription;


	constructor(
		private formBuilder: FormBuilder,
		private timerService: TimerService,
		private db: AngularFireDatabase) {

		this.colunasTabela = [{ nome: 'col 2', field: 'atividade' }, { nome: 'id', field: 'key' }, { nome: 'col 1', field: 'tempo' }];
		this.atualizarAcoesTabela();
		this.meuFormulario = this.formBuilder.group({
			atividade: ['', Validators.required]
		});


		//Sempre quer tiver uma mundaça no firebase, ele será atualizado
		this.listRef = this.db.list('list')
		this.list = this.listRef.snapshotChanges().pipe(
			map((changes: SnapshotAction<any>[]) =>
				changes.map((v) => ({ key: v.payload.key, ...v.payload.val() }))
			)
		)

		// this.formItens?.dadoAdicionadoEvent.subscribe((value) => {
		// 	this.add(value)
		// })
		this.list.subscribe((dados) => {
			this.dadosTabela = dados;
		});

	}
	ngAfterViewInit(): void {
		if (this.fbzTimer) {

			this.startTimer$ = this.fbzTimer?.timerStopedEvent.subscribe((value: string | number) => {
				const itemRef = this.db.object(`list/${this.atividadeSelecionada.key}`);
				console.log("value", value)
				itemRef.update({
					"tempo": value
				})
					.then(() => {
						console.log('Dados atualizados com sucesso');
					})
					.catch((error) => {
						console.error('Erro ao atualizar dados:', error);
					});
					this.atividadeSelecionada = null;
					this.atualizarAcoesTabela();
			});

		}
	}

	get atividade() {
		return this.meuFormulario.get('atividade');
	}

	atualizarAcoesTabela() {
		this.acoesTabela = [{ label: 'play', disabled: this.atividadeSelecionada ? true : false, action: (value: any) => this.openTimer(value) }];
	}

	openTimer(value: any) {
		this.atividadeSelecionada = value
		console.log('aaaaaa', value)
		this.atualizarAcoesTabela()

		// const id = value.key;
		// this.timerService.openTimer(id);
	}

	add(event: any) {
		//CRIAR SERVICE 
		// E CHAMAR POR ELE, APSSAROS DADOS ATE O MODAL DO REGISTRO, E LA CHAMAR SERVICE DO JIRA PARA ADD/FZPUSH
		console.log(event)
		this.listRef.push(event)

		this.atividade?.reset();
	}

	deleteItem(key: string) {
		this.listRef.remove(key);
	}



}
