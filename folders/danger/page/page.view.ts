namespace $.$$ {
	export class $my_tsmb_folders_danger_page extends $.$my_tsmb_folders_danger_page {

		drop_label() {
			return super.drop_label().replace( '{id}', this.id() )
		}

		drop() {

			const id = this.id()			
			const resp = this.$.$my_tsmb_transport.drop( `shares/${id}` )

			this.$.$mol_state_arg.value( 'folder', null )
			this.$.$mol_state_arg.value( 'danger', null )

			const all = {
				... this.$.$my_tsmb_folders_list.all(),
			}
			delete all[ id ]

			this.$.$my_tsmb_folders_list.all( all )

		}

	}
}
