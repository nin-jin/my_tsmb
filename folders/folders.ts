namespace $ {
	
	export let $my_tsmb_folders = $mol_data_record({
		"name": $mol_data_string,                 // Name of share
		"type": $mol_data_string,                 // type of the share
		"remark": $mol_data_string,               // option comments
		"path": $mol_data_string,               // option comments
		"ca": $mol_data_boolean,                  // if share is highly available
		"ca-params": $mol_data_string,            // ca params
		"case-insensitive": $mol_data_boolean,    // if accessis case-insensetive
		// "l2oplock": $mol_data_boolean,            // Server does not issue exclusive caching rights on share
		"encrypt": $mol_data_boolean,             // Enable encryption on the share
		"permissions": $mol_data_string,          // share access permissions
		"map-attributes": $mol_data_string,       // list of methods for keeping SMB file attributes
		"vfs": $mol_data_string,                  // VFS parameters
		"vfs-zerocopy-write": $mol_data_boolean,  // Whether VFS should attempt zero-copy writes
		"vfs-zerocopy-read": $mol_data_boolean,  // Whether VFS should attempt zero-copy writes
		"files-allow": $mol_data_string,          // Optional set of patterns as a filter to allow accessing and listing files
		"files-deny": $mol_data_string,           // Optional set of patterns as a filter to deny accessing and listing files
	
	})

}
