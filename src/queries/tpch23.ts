export const tpch23 = `const %1342[33] = "\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1702[72] = "\\012\\000\\000\\000\\007\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0*)U\\000\\000sf%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1812[28] = "\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\007\\000\\000\\000\\010\\000\\000\\000\\011\\000\\000\\000\\012\\000\\000\\000"

const %22094[1] = " "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 128
  call void umbra::RelationMapped::Reader::init(void*) (%CompilationContext_cpp_215_)
  %CompilationContext_cpp_215_0 = getelementptr int8 %state, i64 216
  call void umbra::AggregationTarget::init(umbra::AggregationTarget*, unsigned long) (%CompilationContext_cpp_215_0, i64 88)
  %CompilationContext_cpp_215_2 = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::init(umbra::SortOperator*, void const*, void const*) (%CompilationContext_cpp_215_2, %state, global %1342)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load int32 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 4
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_230_1 = load int32 %right
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %right, i64 4
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %Char1_cpp_85_ = cmpult i32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_1
  %Char1_cpp_85_5 = zext i32 %Char1_cpp_85_
  %Char1_cpp_85_6 = cmpult i32 %MaterializationHelper_cpp_230_1, %MaterializationHelper_cpp_230_
  %Char1_cpp_85_7 = zext i32 %Char1_cpp_85_6
  %Char1_cpp_85_8 = sub i32 %Char1_cpp_85_7, %Char1_cpp_85_5
  %Char1_cpp_85_9 = cmpult i32 %MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_3
  %Char1_cpp_85_10 = zext i32 %Char1_cpp_85_9
  %Char1_cpp_85_11 = cmpult i32 %MaterializationHelper_cpp_230_3, %MaterializationHelper_cpp_230_0
  %Char1_cpp_85_12 = zext i32 %Char1_cpp_85_11
  %Char1_cpp_85_13 = sub i32 %Char1_cpp_85_12, %Char1_cpp_85_10
  %SortTranslator_cpp_113_ = cmpeq i32 %Char1_cpp_85_8, 0
  %SortTranslator_cpp_113_14 = SExt i32 %SortTranslator_cpp_113_
  %SortTranslator_cpp_113_15 = and i32 %Char1_cpp_85_13, %SortTranslator_cpp_113_14
  %SortTranslator_cpp_113_16 = or i32 %Char1_cpp_85_8, %SortTranslator_cpp_113_15
  return %SortTranslator_cpp_113_16
}

declare void @umbra::RelationMapped::Reader::init(void*)(int8* %1120)

declare void @umbra::AggregationTarget::init(umbra::AggregationTarget*, unsigned long)(object umbra::AggregationTarget* %1241, int64 %1255)

declare void @umbra::SortOperator::init(umbra::SortOperator*, void const*, void const*)(object umbra::SortOperator* %1480, int8* %1494, int8* %1508)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_221_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 128
  call void umbra::TableScanOperator::Job::init(void*, void*, unsigned long, umbra::Relation::RestrictionInfo*, unsigned long, unsigned int*, unsigned int) (%CompilationContext_cpp_221_, %CompilationContext_cpp_215_, i64 5, global %1702, i64 1, global %1812, i32 7)
  call void umbra::ExecutionPlan::setupParallelWork(void*, unsigned int, unsigned int, unsigned int, unsigned int) (%state, i32 28736, i32 2, i32 3, i32 4)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 5)
  return 6
}

declare void @umbra::TableScanOperator::Job::init(void*, void*, unsigned long, umbra::Relation::RestrictionInfo*, unsigned long, unsigned int*, unsigned int)(int8* %1959, int8* %1973, int64 %1987, object umbra::Relation::RestrictionInfo* %2001, int64 %2015, int32* %2029, int32 %2043)

declare void @umbra::ExecutionPlan::setupParallelWork(void*, unsigned int, unsigned int, unsigned int, unsigned int)(int8* %2129, int32 %2143, int32 %2157, int32 %2171, int32 %2185)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void umbra::Preaggregation::init(umbra::Preaggregation*, unsigned long) (%Pipeline_cpp_276_, i64 88)
  return 0
}

declare void @umbra::Preaggregation::init(umbra::Preaggregation*, unsigned long)(object umbra::Preaggregation* %2367, int64 %2381)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void umbra::Preaggregation::destroy(umbra::Preaggregation*) (%Pipeline_cpp_276_)
  return 0
}

declare void @umbra::Preaggregation::destroy(umbra::Preaggregation*)(object umbra::Preaggregation* %2537)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @umbra::ExecutionPlan::setupParallelStep(void*, unsigned int)(int8* %2669, int32 %2683)

define int32 @_10_groupby_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %from = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %to = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %reader = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %data = load object umbra::RelationMapped::Reader %reader, i32 0, i32 1
  %RelationMappedLogic_cpp_343_ = cmpult i64 %from, %to
  condbr %RelationMappedLogic_cpp_343_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%from, %body %RelationMappedLogic_cpp_348_1, %loopDoneTuples]
  %RelationMappedLogic_cpp_346_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_347_ = shl i64 %RelationMappedLogic_cpp_346_, 16
  %RelationMappedLogic_cpp_347_0 = add i64 %RelationMappedLogic_cpp_347_, 65536
  %RelationMappedLogic_cpp_348_ = cmpult i64 %to, %RelationMappedLogic_cpp_347_0
  %RelationMappedLogic_cpp_348_1 = select i64 %RelationMappedLogic_cpp_348_, %to, %RelationMappedLogic_cpp_347_0
  %RelationMappedLogic_cpp_350_ = mul i64 %RelationMappedLogic_cpp_346_, 116
  %RelationMappedLogic_cpp_350_2 = mul i64 %RelationMappedLogic_cpp_350_, 65536
  %RelationMappedLogic_cpp_350_3 = getelementptr int8 %data, %RelationMappedLogic_cpp_350_2
  %RelationMappedLogic_cpp_351_ = shl i64 %RelationMappedLogic_cpp_346_, 16
  %RelationMappedLogic_cpp_352_ = sub i64 %firstTid, %RelationMappedLogic_cpp_351_
  %RelationMappedLogic_cpp_352_4 = sub i64 %RelationMappedLogic_cpp_348_1, %RelationMappedLogic_cpp_351_
  %RelationMappedLogic_cpp_354_ = cmpne i64 %RelationMappedLogic_cpp_352_, %RelationMappedLogic_cpp_352_4
  condbr %RelationMappedLogic_cpp_354_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_352_, %loopBlocks %RelationMappedLogic_cpp_361_, %contScan]
  %RelationMappedLogic_cpp_308_ = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 3670016
  %RelationMappedLogic_cpp_315_ = load int32 %RelationMappedLogic_cpp_308_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_315_, 2451059
  condbr %Date_cpp_57_ %then %contScan

then:
  %RelationMappedLogic_cpp_308_5 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 3145728
  %RelationMappedLogic_cpp_315_6 = load int32 %RelationMappedLogic_cpp_308_5, %localTid
  %RelationMappedLogic_cpp_308_7 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 3407872
  %RelationMappedLogic_cpp_315_8 = load int32 %RelationMappedLogic_cpp_308_7, %localTid
  %RelationMappedLogic_cpp_308_9 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 1048576
  %RelationMappedLogic_cpp_314_ = load int64 %RelationMappedLogic_cpp_308_9, %localTid
  %RelationMappedLogic_cpp_308_10 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 1572864
  %RelationMappedLogic_cpp_314_11 = load int64 %RelationMappedLogic_cpp_308_10, %localTid
  %RelationMappedLogic_cpp_308_12 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 2097152
  %RelationMappedLogic_cpp_314_13 = load int64 %RelationMappedLogic_cpp_308_12, %localTid
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %RelationMappedLogic_cpp_314_13 %cont14 %overflow

cont14:
  %BigNumeric_cpp_863_ = ashr i64 %RelationMappedLogic_cpp_314_11, 63
  %BigNumeric_cpp_863_15 = builddata128 d128 %RelationMappedLogic_cpp_314_11 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_16 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_17 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_16
  %Numeric_cpp_698_ = call d128 umbra::BigNumericRuntime::mulTrap(umbra::data128_t, umbra::data128_t) (%BigNumeric_cpp_863_15, %BigNumeric_cpp_863_17)
  br %cont18

cont18:
  %Numeric_cpp_763_20 = checkedssub i64 100, %RelationMappedLogic_cpp_314_13 %cont19 %overflow

cont19:
  %BigNumeric_cpp_863_21 = ashr i64 %RelationMappedLogic_cpp_314_11, 63
  %BigNumeric_cpp_863_22 = builddata128 d128 %RelationMappedLogic_cpp_314_11 %BigNumeric_cpp_863_21
  %BigNumeric_cpp_863_23 = ashr i64 %Numeric_cpp_763_20, 63
  %BigNumeric_cpp_863_24 = builddata128 d128 %Numeric_cpp_763_20 %BigNumeric_cpp_863_23
  %Numeric_cpp_698_25 = call d128 umbra::BigNumericRuntime::mulTrap(umbra::data128_t, umbra::data128_t) (%BigNumeric_cpp_863_22, %BigNumeric_cpp_863_24)
  %RelationMappedLogic_cpp_308_26 = getelementptr int8 %RelationMappedLogic_cpp_350_3, i64 2621440
  %RelationMappedLogic_cpp_314_27 = load int64 %RelationMappedLogic_cpp_308_26, %localTid
  br %cont28

cont28:
  %Numeric_cpp_600_ = checkedsadd i64 100, %RelationMappedLogic_cpp_314_27 %cont29 %overflow

cont29:
  %BigNumeric_cpp_863_30 = ashr i64 %Numeric_cpp_600_, 63
  %BigNumeric_cpp_863_31 = builddata128 d128 %Numeric_cpp_600_ %BigNumeric_cpp_863_30
  %BigNumeric_cpp_630_ = call d128 umbra::BigNumericRuntime::mulTrap(umbra::data128_t, umbra::data128_t) (%Numeric_cpp_698_25, %BigNumeric_cpp_863_31)
  %Hash_cpp_264_ = zext i64 %RelationMappedLogic_cpp_315_6
  %Hash_cpp_264_32 = zext i64 %RelationMappedLogic_cpp_315_8
  %Hash_cpp_268_ = shl i64 %Hash_cpp_264_32, 32
  %Hash_cpp_268_33 = or i64 %Hash_cpp_264_, %Hash_cpp_268_
  %Hash_cpp_374_ = crc32 i64 5961697176435608501, %Hash_cpp_268_33
  %Hash_cpp_375_ = crc32 i64 2231409791114444147, %Hash_cpp_268_33
  %Hash_cpp_379_ = rotr i64 %Hash_cpp_375_, 32
  %Hash_cpp_379_34 = xor i64 %Hash_cpp_374_, %Hash_cpp_379_
  %Hash_cpp_379_35 = mul i64 %Hash_cpp_379_34, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %hashTable = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_379_35, 1023
  %PreaggregationLogic_cpp_20_36 = load object umbra::Preaggregation::EntryHeader* %hashTable, %PreaggregationLogic_cpp_20_
  %hash = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_36, i32 0, i32 0
  %PreaggregationLogic_cpp_25_ = cmpne i64 %hash, %Hash_cpp_379_35
  condbr %PreaggregationLogic_cpp_25_ %then37 %else

then37:
  %PreaggregationLogic_cpp_29_ = call ptr umbra::Preaggregation::addEntry(unsigned long) (%Pipeline_cpp_276_, %Hash_cpp_379_35)
  store int32 %RelationMappedLogic_cpp_315_6, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int32 %RelationMappedLogic_cpp_315_8, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_368_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  store int64 %RelationMappedLogic_cpp_314_, %GroupByTranslator_cpp_368_
  %MaterializationHelper_cpp_983_38 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 8
  store int64 %RelationMappedLogic_cpp_314_11, %MaterializationHelper_cpp_983_38
  %MaterializationHelper_cpp_983_39 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 16
  store data128 %Numeric_cpp_698_, %MaterializationHelper_cpp_983_39
  %MaterializationHelper_cpp_983_40 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 32
  store data128 %BigNumeric_cpp_630_, %MaterializationHelper_cpp_983_40
  %MaterializationHelper_cpp_983_41 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 48
  store int64 %RelationMappedLogic_cpp_314_, %MaterializationHelper_cpp_983_41
  %MaterializationHelper_cpp_983_42 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 56
  store int64 i64 1, %MaterializationHelper_cpp_983_42
  %MaterializationHelper_cpp_983_43 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 64
  store int64 %RelationMappedLogic_cpp_314_11, %MaterializationHelper_cpp_983_43
  %MaterializationHelper_cpp_983_44 = getelementptr int8 %GroupByTranslator_cpp_368_, i64 72
  store int64 %RelationMappedLogic_cpp_314_13, %MaterializationHelper_cpp_983_44
  br %cont80

else:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_36, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_45 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_876_46 = load int32 %MaterializationHelper_cpp_876_45
  %Char1_cpp_75_ = cmpeq i32 %RelationMappedLogic_cpp_315_6, %MaterializationHelper_cpp_876_
  %Char1_cpp_75_47 = cmpeq i32 %RelationMappedLogic_cpp_315_8, %MaterializationHelper_cpp_876_46
  %ConsumerContext_cpp_405_ = and bool %Char1_cpp_75_, %Char1_cpp_75_47
  condbr %ConsumerContext_cpp_405_ %else48 %then37

else48:
  %GroupByTranslator_cpp_378_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_378_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_314_ %cont49 %overflow

cont49:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_378_
  %MaterializationHelper_cpp_977_50 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 8
  %MaterializationHelper_cpp_977_51 = load int64 %MaterializationHelper_cpp_977_50
  %Numeric_cpp_777_53 = checkedsadd i64 %MaterializationHelper_cpp_977_51, %RelationMappedLogic_cpp_314_11 %cont52 %overflow

cont52:
  %MaterializationHelper_cpp_983_54 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 8
  store int64 %Numeric_cpp_777_53, %MaterializationHelper_cpp_983_54
  %MaterializationHelper_cpp_977_55 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 16
  %MaterializationHelper_cpp_977_56 = load data128 %MaterializationHelper_cpp_977_55
  %BigNumeric_cpp_688_ = call d128 umbra::BigNumericRuntime::addTrap(umbra::data128_t, umbra::data128_t) (%MaterializationHelper_cpp_977_56, %Numeric_cpp_698_)
  %MaterializationHelper_cpp_983_57 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_57
  %MaterializationHelper_cpp_977_58 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 32
  %MaterializationHelper_cpp_977_59 = load data128 %MaterializationHelper_cpp_977_58
  %BigNumeric_cpp_688_60 = call d128 umbra::BigNumericRuntime::addTrap(umbra::data128_t, umbra::data128_t) (%MaterializationHelper_cpp_977_59, %BigNumeric_cpp_630_)
  %MaterializationHelper_cpp_983_61 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 32
  store data128 %BigNumeric_cpp_688_60, %MaterializationHelper_cpp_983_61
  %MaterializationHelper_cpp_977_62 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 48
  %MaterializationHelper_cpp_977_63 = load int64 %MaterializationHelper_cpp_977_62
  %Numeric_cpp_777_65 = checkedsadd i64 %MaterializationHelper_cpp_977_63, %RelationMappedLogic_cpp_314_ %cont64 %overflow

cont64:
  %MaterializationHelper_cpp_983_66 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 48
  store int64 %Numeric_cpp_777_65, %MaterializationHelper_cpp_983_66
  %MaterializationHelper_cpp_977_67 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 56
  %MaterializationHelper_cpp_977_68 = load int64 %MaterializationHelper_cpp_977_67
  %Aggregate_cpp_173_ = add i64 %MaterializationHelper_cpp_977_68, 1
  %MaterializationHelper_cpp_983_69 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 56
  store int64 %Aggregate_cpp_173_, %MaterializationHelper_cpp_983_69
  %MaterializationHelper_cpp_977_70 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 64
  %MaterializationHelper_cpp_977_71 = load int64 %MaterializationHelper_cpp_977_70
  %Numeric_cpp_777_73 = checkedsadd i64 %MaterializationHelper_cpp_977_71, %RelationMappedLogic_cpp_314_11 %cont72 %overflow

cont72:
  %MaterializationHelper_cpp_983_74 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 64
  store int64 %Numeric_cpp_777_73, %MaterializationHelper_cpp_983_74
  %MaterializationHelper_cpp_977_75 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 72
  %MaterializationHelper_cpp_977_76 = load int64 %MaterializationHelper_cpp_977_75
  %Numeric_cpp_777_78 = checkedsadd i64 %MaterializationHelper_cpp_977_76, %RelationMappedLogic_cpp_314_13 %cont77 %overflow

cont77:
  %MaterializationHelper_cpp_983_79 = getelementptr int8 %GroupByTranslator_cpp_378_, i64 72
  store int64 %Numeric_cpp_777_78, %MaterializationHelper_cpp_983_79
  br %cont80

cont80:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_361_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_362_ = cmpne i64 %RelationMappedLogic_cpp_361_, %RelationMappedLogic_cpp_352_4
  condbr %RelationMappedLogic_cpp_362_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_364_ = cmpne i64 %RelationMappedLogic_cpp_348_1, %to
  condbr %RelationMappedLogic_cpp_364_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5

overflow:
  call void umbra::RuntimeFunctions::throwOverflow() ()
  unreachable
}

declare void @umbra::RuntimeFunctions::throwOverflow()()

declare data128 @umbra::BigNumericRuntime::mulTrap(umbra::data128_t, umbra::data128_t)(data128 %4776, data128 %4790)

declare int8* @umbra::Preaggregation::addEntry(unsigned long)(object umbra::Preaggregation* %5935, int64 %5949)

declare data128 @umbra::BigNumericRuntime::addTrap(umbra::data128_t, umbra::data128_t)(data128 %7680, data128 %7694)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_221_ = getelementptr int8 %state, i64 56
  call void umbra::TableScanOperator::Job::destroy(void*) (%CompilationContext_cpp_221_)
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 216
  call void umbra::AggregationTarget::exchangeTables(void*, unsigned long) (%CompilationContext_cpp_215_, %state, i64 32)
  %CompilationContext_cpp_221_0 = getelementptr int8 %state, i64 56
  call void umbra::AggregationTarget::setupAggregateJob(void*) (%CompilationContext_cpp_215_, %CompilationContext_cpp_221_0)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 8)
  return 7
}

declare void @umbra::TableScanOperator::Job::destroy(void*)(int8* %9267)

declare void @umbra::AggregationTarget::exchangeTables(void*, unsigned long)(object umbra::AggregationTarget* %9349, int8* %9363, int64 %9377)

declare void @umbra::AggregationTarget::setupAggregateJob(void*)(object umbra::AggregationTarget* %9468, int8* %9482)

define int32 @_10_groupby_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %chunks = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %chunks
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%chunks, %body %next53, %loopDoneChunkEntries]
  call void umbra::AggregationTarget::Fragment::checkSize() (%PreaggregationLogic_cpp_47_)
  %hashTable = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %hashTableShift = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %limit = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %limit
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %hash = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %hash, %hashTableShift
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %hashTable, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %next, %noMatch]
  %hash1 = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_ = cmpeq i64 %hash, %hash1
  condbr %PreaggregationLogic_cpp_75_ %then %noMatch

then:
  %GroupByTranslator_cpp_176_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_176_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_176_, i64 4
  %MaterializationHelper_cpp_876_3 = load int32 %MaterializationHelper_cpp_876_2
  %GroupByTranslator_cpp_177_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_4 = load int32 %GroupByTranslator_cpp_177_
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_177_, i64 4
  %MaterializationHelper_cpp_876_6 = load int32 %MaterializationHelper_cpp_876_5
  %Char1_cpp_75_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_4
  %Char1_cpp_75_7 = cmpeq i32 %MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_6
  %ConsumerContext_cpp_405_ = and bool %Char1_cpp_75_, %Char1_cpp_75_7
  condbr %ConsumerContext_cpp_405_ %else %noMatch

else:
  %GroupByTranslator_cpp_185_ = getelementptr int8 %entry, i64 24
  %GroupByTranslator_cpp_185_8 = getelementptr int8 %chainEntry, i64 24
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_185_8
  %MaterializationHelper_cpp_977_9 = load int64 %GroupByTranslator_cpp_185_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_9 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_185_8
  %MaterializationHelper_cpp_977_10 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 8
  %MaterializationHelper_cpp_977_11 = load int64 %MaterializationHelper_cpp_977_10
  %MaterializationHelper_cpp_977_12 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 8
  %MaterializationHelper_cpp_977_13 = load int64 %MaterializationHelper_cpp_977_12
  %Numeric_cpp_777_15 = checkedsadd i64 %MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_13 %cont14 %overflow

cont14:
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 8
  store int64 %Numeric_cpp_777_15, %MaterializationHelper_cpp_983_
  %MaterializationHelper_cpp_977_16 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 16
  %MaterializationHelper_cpp_977_17 = load data128 %MaterializationHelper_cpp_977_16
  %MaterializationHelper_cpp_977_18 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 16
  %MaterializationHelper_cpp_977_19 = load data128 %MaterializationHelper_cpp_977_18
  %BigNumeric_cpp_688_ = call d128 umbra::BigNumericRuntime::addTrap(umbra::data128_t, umbra::data128_t) (%MaterializationHelper_cpp_977_17, %MaterializationHelper_cpp_977_19)
  %MaterializationHelper_cpp_983_20 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_20
  %MaterializationHelper_cpp_977_21 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 32
  %MaterializationHelper_cpp_977_22 = load data128 %MaterializationHelper_cpp_977_21
  %MaterializationHelper_cpp_977_23 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 32
  %MaterializationHelper_cpp_977_24 = load data128 %MaterializationHelper_cpp_977_23
  %BigNumeric_cpp_688_25 = call d128 umbra::BigNumericRuntime::addTrap(umbra::data128_t, umbra::data128_t) (%MaterializationHelper_cpp_977_22, %MaterializationHelper_cpp_977_24)
  %MaterializationHelper_cpp_983_26 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 32
  store data128 %BigNumeric_cpp_688_25, %MaterializationHelper_cpp_983_26
  %MaterializationHelper_cpp_977_27 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 48
  %MaterializationHelper_cpp_977_28 = load int64 %MaterializationHelper_cpp_977_27
  %MaterializationHelper_cpp_977_29 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 48
  %MaterializationHelper_cpp_977_30 = load int64 %MaterializationHelper_cpp_977_29
  %Numeric_cpp_777_32 = checkedsadd i64 %MaterializationHelper_cpp_977_28, %MaterializationHelper_cpp_977_30 %cont31 %overflow

cont31:
  %MaterializationHelper_cpp_983_33 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 48
  store int64 %Numeric_cpp_777_32, %MaterializationHelper_cpp_983_33
  %MaterializationHelper_cpp_977_34 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 56
  %MaterializationHelper_cpp_977_35 = load int64 %MaterializationHelper_cpp_977_34
  %MaterializationHelper_cpp_977_36 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 56
  %MaterializationHelper_cpp_977_37 = load int64 %MaterializationHelper_cpp_977_36
  %Aggregate_cpp_182_ = add i64 %MaterializationHelper_cpp_977_35, %MaterializationHelper_cpp_977_37
  %MaterializationHelper_cpp_983_38 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 56
  store int64 %Aggregate_cpp_182_, %MaterializationHelper_cpp_983_38
  %MaterializationHelper_cpp_977_39 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 64
  %MaterializationHelper_cpp_977_40 = load int64 %MaterializationHelper_cpp_977_39
  %MaterializationHelper_cpp_977_41 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 64
  %MaterializationHelper_cpp_977_42 = load int64 %MaterializationHelper_cpp_977_41
  %Numeric_cpp_777_44 = checkedsadd i64 %MaterializationHelper_cpp_977_40, %MaterializationHelper_cpp_977_42 %cont43 %overflow

cont43:
  %MaterializationHelper_cpp_983_45 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 64
  store int64 %Numeric_cpp_777_44, %MaterializationHelper_cpp_983_45
  %MaterializationHelper_cpp_977_46 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 72
  %MaterializationHelper_cpp_977_47 = load int64 %MaterializationHelper_cpp_977_46
  %MaterializationHelper_cpp_977_48 = getelementptr int8 %GroupByTranslator_cpp_185_, i64 72
  %MaterializationHelper_cpp_977_49 = load int64 %MaterializationHelper_cpp_977_48
  %Numeric_cpp_777_51 = checkedsadd i64 %MaterializationHelper_cpp_977_47, %MaterializationHelper_cpp_977_49 %cont50 %overflow

cont50:
  %MaterializationHelper_cpp_983_52 = getelementptr int8 %GroupByTranslator_cpp_185_8, i64 72
  store int64 %Numeric_cpp_777_51, %MaterializationHelper_cpp_983_52
  br %continue

noMatch:
  %next = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %next
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %count = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_ = add i64 %count, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 104
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %limit
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %next53 = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %next53
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 8

overflow:
  call void umbra::RuntimeFunctions::throwOverflow() ()
  unreachable
}

declare void @umbra::AggregationTarget::Fragment::checkSize()(object umbra::AggregationTarget::Fragment* %9787)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void umbra::ExecutionPlan::cleanupParallelWork(void*) (%state)
  %CompilationContext_cpp_221_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 216
  call void umbra::AggregationTarget::setupScanJob(void*) (%CompilationContext_cpp_215_, %CompilationContext_cpp_221_)
  call void umbra::ExecutionPlan::setupParallelWork(void*, unsigned int, unsigned int, unsigned int, unsigned int) (%state, i32 232, i32 9, i32 10, i32 11)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 12)
  return 13
}

declare void @umbra::ExecutionPlan::cleanupParallelWork(void*)(int8* %14189)

declare void @umbra::AggregationTarget::setupScanJob(void*)(object umbra::AggregationTarget* %14321, int8* %14335)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void umbra::SortOperator::init(umbra::SortOperator*, void const*, void const*) (%Pipeline_cpp_276_, %state, global %1342)
  return 0
}

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void umbra::SortOperator::destroy(umbra::SortOperator*) (%Pipeline_cpp_276_)
  return 0
}

declare void @umbra::SortOperator::destroy(umbra::SortOperator*)(object umbra::SortOperator* %14701)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %from = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %to = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %from, %to
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%from, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %next, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_0 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_876_1 = load int32 %MaterializationHelper_cpp_876_0
  %GroupByTranslator_cpp_411_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_411_
  %MaterializationHelper_cpp_977_2 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 8
  %MaterializationHelper_cpp_977_3 = load int64 %MaterializationHelper_cpp_977_2
  %MaterializationHelper_cpp_977_4 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 16
  %MaterializationHelper_cpp_977_5 = load data128 %MaterializationHelper_cpp_977_4
  %MaterializationHelper_cpp_977_6 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 32
  %MaterializationHelper_cpp_977_7 = load data128 %MaterializationHelper_cpp_977_6
  %MaterializationHelper_cpp_977_8 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 48
  %MaterializationHelper_cpp_977_9 = load int64 %MaterializationHelper_cpp_977_8
  %MaterializationHelper_cpp_876_10 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 56
  %MaterializationHelper_cpp_876_11 = load int64 %MaterializationHelper_cpp_876_10
  %MaterializationHelper_cpp_977_12 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 64
  %MaterializationHelper_cpp_977_13 = load int64 %MaterializationHelper_cpp_977_12
  %MaterializationHelper_cpp_977_14 = getelementptr int8 %GroupByTranslator_cpp_411_, i64 72
  %MaterializationHelper_cpp_977_15 = load int64 %MaterializationHelper_cpp_977_14
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_977_9, 63
  %BigNumeric_cpp_863_16 = builddata128 d128 %MaterializationHelper_cpp_977_9 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_17 = ashr i64 %MaterializationHelper_cpp_876_11, 63
  %BigNumeric_cpp_863_18 = builddata128 d128 %MaterializationHelper_cpp_876_11 %BigNumeric_cpp_863_17
  %Numeric_cpp_627_ = call d128 umbra::BigNumericRuntime::divTrap(umbra::data128_t, umbra::data128_t, unsigned int) (%BigNumeric_cpp_863_16, %BigNumeric_cpp_863_18, i32 19)
  %BigNumeric_cpp_863_19 = ashr i64 %MaterializationHelper_cpp_977_13, 63
  %BigNumeric_cpp_863_20 = builddata128 d128 %MaterializationHelper_cpp_977_13 %BigNumeric_cpp_863_19
  %BigNumeric_cpp_863_21 = ashr i64 %MaterializationHelper_cpp_876_11, 63
  %BigNumeric_cpp_863_22 = builddata128 d128 %MaterializationHelper_cpp_876_11 %BigNumeric_cpp_863_21
  %Numeric_cpp_627_23 = call d128 umbra::BigNumericRuntime::divTrap(umbra::data128_t, umbra::data128_t, unsigned int) (%BigNumeric_cpp_863_20, %BigNumeric_cpp_863_22, i32 19)
  %BigNumeric_cpp_863_24 = ashr i64 %MaterializationHelper_cpp_977_15, 63
  %BigNumeric_cpp_863_25 = builddata128 d128 %MaterializationHelper_cpp_977_15 %BigNumeric_cpp_863_24
  %BigNumeric_cpp_863_26 = ashr i64 %MaterializationHelper_cpp_876_11, 63
  %BigNumeric_cpp_863_27 = builddata128 d128 %MaterializationHelper_cpp_876_11 %BigNumeric_cpp_863_26
  %Numeric_cpp_627_28 = call d128 umbra::BigNumericRuntime::divTrap(umbra::data128_t, umbra::data128_t, unsigned int) (%BigNumeric_cpp_863_25, %BigNumeric_cpp_863_27, i32 19)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_492_ = call ptr umbra::SortOperator::storeTuple(unsigned long) (%Pipeline_cpp_276_, i64 112)
  store int32 %MaterializationHelper_cpp_876_, %SortTranslator_cpp_492_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_492_, i64 4
  store int32 %MaterializationHelper_cpp_876_1, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_492_, i64 8
  store data128 %MaterializationHelper_cpp_977_5, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_29 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store data128 %MaterializationHelper_cpp_977_7, %MaterializationHelper_cpp_150_29
  %MaterializationHelper_cpp_150_30 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store data128 %Numeric_cpp_627_, %MaterializationHelper_cpp_150_30
  %MaterializationHelper_cpp_150_31 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  store data128 %Numeric_cpp_627_23, %MaterializationHelper_cpp_150_31
  %MaterializationHelper_cpp_150_32 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  store data128 %Numeric_cpp_627_28, %MaterializationHelper_cpp_150_32
  %MaterializationHelper_cpp_150_33 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_150_33
  %MaterializationHelper_cpp_150_34 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 88
  store int64 %MaterializationHelper_cpp_977_3, %MaterializationHelper_cpp_150_34
  %MaterializationHelper_cpp_150_35 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 96
  store int64 %MaterializationHelper_cpp_876_11, %MaterializationHelper_cpp_150_35
  %next = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %next
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %to
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 12
}

declare data128 @umbra::BigNumericRuntime::divTrap(umbra::data128_t, umbra::data128_t, unsigned int)(data128 %16420, data128 %16434, int32 %16448)

declare int8* @umbra::SortOperator::storeTuple(unsigned long)(object umbra::SortOperator* %16968, int64 %16982)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void umbra::ExecutionPlan::preparePerObjectWork(void*, unsigned int) (%state, i32 32)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 15)
  return 14
}

declare void @umbra::ExecutionPlan::preparePerObjectWork(void*, unsigned int)(int8* %18216, int32 %18230)

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void umbra::SortOperator::sortLocal() (%Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

declare void @umbra::SortOperator::sortLocal()(object umbra::SortOperator* %18424)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void umbra::ExecutionPlan::finishPerObjectWork(void*) (%state)
  %currentLocalState = load object umbra::GlobalStateHeader %state, i32 0, i32 2
  %threadCount = load object umbra::LocalStateHeader %currentLocalState, i32 0, i32 2
  %localStateSize = load object umbra::LocalStateHeader %currentLocalState, i32 0, i32 0
  %Pipeline_cpp_68_ = getelementptr int8 %currentLocalState, i64 64
  %Pipeline_cpp_55_ = cmpult i32 0, %threadCount
  condbr %Pipeline_cpp_55_ %loopStates %loopDoneStates

loopStates:
  %Thread = phi i32 [i32 0, %body %Pipeline_cpp_96_, %continue]
  %Pipeline_cpp_75_ = zext i64 %Thread
  %Pipeline_cpp_75_0 = mul i64 %Pipeline_cpp_75_, %localStateSize
  %Pipeline_cpp_75_1 = getelementptr int8 %Pipeline_cpp_68_, %Pipeline_cpp_75_0
  %Pipeline_cpp_78_ = load int8 %Pipeline_cpp_75_1, i32 -1
  %Pipeline_cpp_78_2 = cmpeq i8 %Pipeline_cpp_78_, 0
  condbr %Pipeline_cpp_78_2 %continue %else

else:
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 24808
  %Pipeline_cpp_276_ = getelementptr int8 %Pipeline_cpp_75_1, i64 32
  call void umbra::SortOperator::donateTupleMemory(umbra::SortOperator&) (%Pipeline_cpp_276_, %CompilationContext_cpp_215_)
  br %continue

continue:
  %Pipeline_cpp_96_ = add i32 %Thread, 1
  %Pipeline_cpp_97_ = cmpult i32 %Pipeline_cpp_96_, %threadCount
  condbr %Pipeline_cpp_97_ %loopStates %loopDoneStates

loopDoneStates:
  %CompilationContext_cpp_215_3 = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::prepareSortGlobal() (%CompilationContext_cpp_215_3)
  %CompilationContext_cpp_215_4 = getelementptr int8 %state, i64 24808
  %CompilationContext_cpp_221_ = getelementptr int8 %state, i64 56
  call void umbra::SortOperator::setupGlobalSortJob(void*, umbra::SortOperator&) (%CompilationContext_cpp_221_, %CompilationContext_cpp_215_4)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 17)
  return 16
}

declare void @umbra::ExecutionPlan::finishPerObjectWork(void*)(int8* %18546)

declare void @umbra::SortOperator::donateTupleMemory(umbra::SortOperator&)(object umbra::SortOperator* %19117, object umbra::SortOperator* %19131)

declare void @umbra::SortOperator::prepareSortGlobal()(object umbra::SortOperator* %19308)

declare void @umbra::SortOperator::setupGlobalSortJob(void*, umbra::SortOperator&)(int8* %19441, object umbra::SortOperator* %19455)

define int32 @_10_sort_groupby_extra10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_431_ = load int32 %localState
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::sortGlobal(unsigned int) (%CompilationContext_cpp_215_, %SortTranslator_cpp_431_)
  br %stepDone

stepDone:
  return 17
}

declare void @umbra::SortOperator::sortGlobal(unsigned int)(object umbra::SortOperator* %19695, int32 %19709)

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::finishSortGlobal() (%CompilationContext_cpp_215_)
  call void umbra::ExecutionPlan::cleanupParallelWork(void*) (%state)
  %CompilationContext_cpp_221_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_215_0 = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::Job::init(void*, umbra::SortOperator&, bool) (%CompilationContext_cpp_221_, %CompilationContext_cpp_215_0, bool true)
  call void umbra::ExecutionPlan::setupParallelWork(void*, unsigned int, unsigned int, unsigned int, unsigned int) (%state, i32 32, i32 18, i32 19, i32 20)
  call void umbra::ExecutionPlan::setupParallelStep(void*, unsigned int) (%state, i32 21)
  return 22
}

declare void @umbra::SortOperator::finishSortGlobal()(object umbra::SortOperator* %19885)

declare void @umbra::SortOperator::Job::init(void*, umbra::SortOperator&, bool)(int8* %20043, object umbra::SortOperator* %20057, bool %20071)

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %from = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %to = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_511_ = cmpne ptr %from, %to
  condbr %SortTranslator_cpp_511_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%from, %body %SortTranslator_cpp_523_, %cont18]
  %CodeGen_hpp_1150_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load int32 %CodeGen_hpp_1150_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1150_, i64 4
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1150_, i64 8
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_3 = load data128 %MaterializationHelper_cpp_229_2
  %MaterializationHelper_cpp_229_4 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_5 = load data128 %MaterializationHelper_cpp_229_4
  %MaterializationHelper_cpp_229_6 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_7 = load data128 %MaterializationHelper_cpp_229_6
  %MaterializationHelper_cpp_229_8 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 64
  %MaterializationHelper_cpp_230_9 = load data128 %MaterializationHelper_cpp_229_8
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 80
  %MaterializationHelper_cpp_230_11 = load int64 %MaterializationHelper_cpp_229_10
  %MaterializationHelper_cpp_229_12 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 88
  %MaterializationHelper_cpp_230_13 = load int64 %MaterializationHelper_cpp_229_12
  %MaterializationHelper_cpp_229_14 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 96
  %MaterializationHelper_cpp_230_15 = load int64 %MaterializationHelper_cpp_229_14
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 120
  %sql_cpp_125_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_215_
  %CodeGen_cpp_441_ = cmpule i8 1, %sql_cpp_125_
  condbr %CodeGen_cpp_441_ %then %cont

then:
  call void umbra::RuntimeFunctions::lockSpinlock(void*, unsigned char, unsigned char) (%CompilationContext_cpp_215_, i8 1, %sql_cpp_125_)
  br %cont

cont:
  call void umbra::Char1Runtime::output(umbra::OutputTarget&, umbra::Type, unsigned int) (ptr 0x55c9e46a5220, i64 648518346341351424, %MaterializationHelper_cpp_230_)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::Char1Runtime::output(umbra::OutputTarget&, umbra::Type, unsigned int) (ptr 0x55c9e46a5220, i64 648518346341351424, %MaterializationHelper_cpp_230_0)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::NumericRuntime::output(umbra::OutputTarget&, umbra::Type, long) (ptr 0x55c9e46a5220, i64 432345564529558016, %MaterializationHelper_cpp_230_11)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::NumericRuntime::output(umbra::OutputTarget&, umbra::Type, long) (ptr 0x55c9e46a5220, i64 432345564529558016, %MaterializationHelper_cpp_230_13)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t) (ptr 0x55c9e46a5220, i64 504403158903030784, %MaterializationHelper_cpp_230_1)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t) (ptr 0x55c9e46a5220, i64 504403158903031296, %MaterializationHelper_cpp_230_3)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t) (ptr 0x55c9e46a5220, i64 504403158785594624, %MaterializationHelper_cpp_230_5)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t) (ptr 0x55c9e46a5220, i64 504403158785594624, %MaterializationHelper_cpp_230_7)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t) (ptr 0x55c9e46a5220, i64 504403158785594624, %MaterializationHelper_cpp_230_9)
  call void umbra::RuntimeFunctions::printStringResult(char const*, unsigned int) (global %22094, i32 1)
  call void umbra::BigIntRuntime::output(umbra::OutputTarget&, umbra::Type, long) (ptr 0x55c9e46a5220, i64 360287970189639680, %MaterializationHelper_cpp_230_15)
  call void umbra::RuntimeFunctions::printNlResult() ()
  %sql_cpp_135_ = atomicrmwxchg int8 i8 0, %CompilationContext_cpp_215_
  %CodeGen_cpp_450_ = cmpult i8 1, %sql_cpp_135_
  condbr %CodeGen_cpp_450_ %then17 %cont18

then17:
  call void umbra::RuntimeFunctions::unlockedSpinlock(void*) (%CompilationContext_cpp_215_)
  br %cont18

cont18:
  call void umbra::RuntimeFunctions::bumpResultValue(void*) (%state)
  %SortTranslator_cpp_523_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_524_ = cmpne ptr %SortTranslator_cpp_523_, %to
  condbr %SortTranslator_cpp_524_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 21
}

declare void @umbra::RuntimeFunctions::lockSpinlock(void*, unsigned char, unsigned char)(int8* %21920, int8 %21934, int8 %21948)

declare void @umbra::Char1Runtime::output(umbra::OutputTarget&, umbra::Type, unsigned int)(object umbra::OutputTarget* %22026, int64 %22040, int32 %22054)

declare void @umbra::RuntimeFunctions::printStringResult(char const*, unsigned int)(int8* %22116, int32 %22130)

declare void @umbra::NumericRuntime::output(umbra::OutputTarget&, umbra::Type, long)(object umbra::OutputTarget* %22228, int64 %22242, int64 %22256)

declare void @umbra::BigNumericRuntime::output(umbra::OutputTarget&, umbra::Type, umbra::data128_t)(object umbra::OutputTarget* %22380, int64 %22394, data128 %22408)

declare void @umbra::BigIntRuntime::output(umbra::OutputTarget&, umbra::Type, long)(object umbra::OutputTarget* %22704, int64 %22718, int64 %22732)

declare void @umbra::RuntimeFunctions::printNlResult()()

declare void @umbra::RuntimeFunctions::unlockedSpinlock(void*)(int8* %22870)

declare void @umbra::RuntimeFunctions::bumpResultValue(void*)(int8* %22912)

define int32 @_10_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void umbra::ExecutionPlan::cleanupParallelWork(void*) (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_215_ = getelementptr int8 %state, i64 128
  call void umbra::RelationMapped::Reader::destroy(void*) (%CompilationContext_cpp_215_)
  %CompilationContext_cpp_215_0 = getelementptr int8 %state, i64 216
  call void umbra::AggregationTarget::destroy(umbra::AggregationTarget*) (%CompilationContext_cpp_215_0)
  %CompilationContext_cpp_215_1 = getelementptr int8 %state, i64 24808
  call void umbra::SortOperator::destroy(umbra::SortOperator*) (%CompilationContext_cpp_215_1)
  return 0
}

declare void @umbra::RelationMapped::Reader::destroy(void*)(int8* %23334)

declare void @umbra::AggregationTarget::destroy(umbra::AggregationTarget*)(object umbra::AggregationTarget* %23417)
`;
