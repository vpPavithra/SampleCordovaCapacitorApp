const fs = require('fs');

if (process.argv[2] === 'android') {
    const fix = `namespace "org.sunbird.app"`;
	const androidbuild = 'android/capacitor-cordova-android-plugins/build.gradle';
    const codeToPatch = 'namespace "capacitor.cordova.android.plugins"';
    // const patch =codeToPatch+ fix +"// patchTag";

	const androidManifest = 'android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml';
	const googleServicesBase = 'google-services.json';
	const googleServicesCap = 'android/capacitor-cordova-android-plugins/google-services.json';

    // package name fix
	fs.readFile(androidManifest, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		data = data.replace('capacitor.cordova.android.plugins', 'org.sunbird.app'); // CHANGE APPLICATION ID
		fs.writeFile(androidManifest, data, (err) => {
			if (err) {
				console.error("********* err", err);
			}
		});
	});

    // google-service fix 
    fs.copyFile(googleServicesBase, googleServicesCap, (err) => {
		if (err) {
			console.error(err);
		}
	});

    // build gardle fix
    fs.readFile(androidbuild, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		data = data.replace(codeToPatch, fix); // CHANGE APPLICATION ID
		fs.writeFile(androidbuild, data, (err) => {
			if (err) {
				console.error("********* err", err);
			}
		});
	});

    // fs.readFile('android/capacitor-cordova-android-plugins/', 'utf8', (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 		return;
	// 	}
	// 	data = data.replace(codeToPatch, fix); // CHANGE APPLICATION ID
	// 	fs.writeFile(androidbuild, data, (err) => {
	// 		if (err) {
	// 			console.error("********* err", err);
	// 		}
	// 	});
	// });
    // // if (existsSync(androidbuild)) {
    //     console.log('file found ' + androidbuild);
    //     fs.readFile(androidbuild, 'utf8', (err, data) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('codeToPatch', codeToPatch);
    //         // console.log('data', data.replace(codeToPatch, patch));
    //         const lineNumbers = getAllIndexes(data.toString().split('\n'), codeToPatch);
    //         console.log('lineNumbers', lineNumbers, data);
    //         if (lineNumbers.length < 1) {
    //             console.error('Could not find source code. Please check ' + androidbuild + ' and update the patch accordingly');
    //             return;
    //         }
    //         // replace the line
    //         lineNumbers.forEach((code) => {
    //             data.replace(code, fix);
    //         });
    //         // const updatedContents = data.join('\n');
    //         // writeFileSync(androidbuild, updatedContents);

    //         fs.writeFile(androidbuild, data, (err) => {
    //             if (err) {
    //                 console.error("********* err", err);
    //             }
    //         });
    //         console.log('Monkey patched');
    //         // data.find(line => line.indexOf(patchIdentifier) !== -1);
    //         // data = data.replace('namespace "capacitor.cordova.android.plugins"', 'namespace "org.sunbird.app"'); // CHANGE APPLICATION ID
    //         // console.log("********** android manifest data ", data);

    //         // fs.writeFile(androidbuild, data, (err) => {
    //         //     if (err) {
    //         //         console.error("********* err", err);
    //         //     }
    //         // });
    //     });
    // // }

    // function getAllIndexes(arr, val) {
    //     const indexes = [];
    //     let  i;
    //     console.log('arr ', arr, typeof(arr));
    //     console.log('val ', val)
    //     for (i = 0; i < arr.length; i++) 
    //     {
    //         console.log(`arr[${i}]`, arr[i], val );
    //         console.log('arr[i] == val ', arr[i] == val);
    //         if (arr[i].trim() == val.trim())
    //         {
    //             console.log("****** true");
    //             indexes.push(arr[i]);}
    //     }
    //     console.log("index ", indexes);
    //     return indexes;
    //   }
    // //   function doPatch(androidbuild, sourceCode, patchCode, patchIdentifier) {
    // //     if (existsSync(androidbuild)) {
    // //         const contents = readFileSync(androidbuild).toString().split('\n');
    // //         // Check if code has been patched already
    // //         // const hasBeenPatched = contents.find(line => line.indexOf(patchIdentifier) !== -1);
        
    // //         // if (!hasBeenPatched) {
    // //             console.log('sourceCode', sourceCode);
    // //         const lineNumbers = getAllIndexes(contents, sourceCode);
    // //         console.log('lineNumbers', lineNumbers, contents);
    // //         if (lineNumbers.length < 1) {
    // //             console.error('Could not find source code. Please check ' + androidbuild + ' and update the patch accordingly');
    // //             return;
    // //         }
    // //         // replace the line
    // //         lineNumbers.forEach((lineNumber) => {
    // //             contents.splice(lineNumber, 1, patchCode);
    // //         });
    // //         const updatedContents = contents.join('\n');
    // //         writeFileSync(androidbuild, updatedContents);
        
    // //         console.log('Monkey patched');
    // //         // } else {
    // //         // console.log('already been patched');
    // //         // }
    // //     }
    // //   }
    // //   doPatch(androidbuild, codeToPatch, patch, "// patchTag");/* eslint-disable @typescript-eslint/no-var-requires */
    
}
